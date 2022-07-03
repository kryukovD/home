import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild("carouselPortfolio") carouselPortfolio: any
  public clickedImage?:any
  public url?:string

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }
  next():void{
    this.carouselPortfolio.next()
  }
  prev():void{
    this.carouselPortfolio.prev()
  }
  openModal(content:any,event:any):void{
    this.clickedImage=event.currentTarget.src
    const img=event.currentTarget
    const url=img.getAttribute("data-url")
    this.url=url
    console.log(img);
    this.modalService.open(content,{size:"xl",animation:true})
  }

}
