import { Component, OnInit, ViewChild } from '@angular/core';
import { delay, mergeMap } from 'rxjs/operators';
import { ConfigService } from '../../config.service';
import { WorksService } from '../works.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-all-works-list',
  templateUrl: './all-works-list.component.html',
  styleUrls: ['./all-works-list.component.scss']
})
export class AllWorksListComponent implements OnInit {
  @ViewChild("carouselPortfolio") carouselPortfolio: any
  data?: any
  cfg?: any
  countItems!:number
  pageSize:number=6
  sliceData?:any
  loaded:Subject<boolean>=new Subject<boolean>()
  public clickedImage?: any
  public url?: string

  constructor(private configService: ConfigService, private workService: WorksService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((cfg) => {
      this.cfg = JSON.parse(cfg)
      return this.workService.getAllWorks(JSON.parse(cfg).allWorks)
    })).subscribe(data => {
      this.data = data
      this.countItems=this.data.length
      this.sliceData=this.data.slice(0,this.pageSize)
      this.loaded.next(true)
      
    })

  }
  ngAfterViewInit() {
    this.loaded.pipe(delay(20)).subscribe(()=>{
      const section = document.querySelector("#all_works")
      const height = document.querySelector("header")!.offsetHeight
      const offset = section!.getBoundingClientRect().top - height
      window.scrollBy({
        top: offset,
        behavior: "smooth"
      })
    })
   

  }

  next(): void {
    this.carouselPortfolio.next()
  }
  prev(): void {
    this.carouselPortfolio.prev()
  }
  openModal(content: any, event: any): void {
    this.clickedImage = event.currentTarget.src
    const img = event.currentTarget
    const url = img.getAttribute("data-url")
    this.url = url
    this.modalService.open(content, { size: "xl", animation: true })
  }
  pageChanged(number:number){
    this.sliceData=this.data.slice(((number-1)*this.pageSize),number*this.pageSize)
  }

}
