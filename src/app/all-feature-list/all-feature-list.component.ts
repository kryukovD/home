import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ConfigService } from '../../config.service';
import { FeatureService } from '../../feature.service';
import { delay, mergeMap } from "rxjs/operators"
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-all-feature-list',
  templateUrl: './all-feature-list.component.html',
  styleUrls: ['./all-feature-list.component.scss']
})
export class AllFeatureListComponent implements OnInit {
  data?: any
  sliceData: any
  countItems!: number
  pageSize: number = 4
  loadData:Subject<boolean>=new Subject<boolean>()
  @ViewChildren('btn') btn?: QueryList<ElementRef>;
  constructor(private configService: ConfigService, private featureService: FeatureService) { 
    
  }

  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((cfg) => {
      return this.featureService.getAll(JSON.parse(cfg).feature_all)
    })).subscribe(data => {
      this.data = data
      this.countItems = this.data.length
      this.sliceData = this.data.slice(0, this.pageSize)
      this.loadData.next(true)
     
    })

  }

  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      this.autoHeight("title-content")
      this.autoHeight("content__desc")
    });
    this.loadData.pipe(delay(20)).subscribe((result)=>{
      if(result){
        let headerHeight=document.querySelector("header")!.offsetHeight
        let scrollTo = document.querySelector("#all_features_title")!.getBoundingClientRect().top - headerHeight
        window.scrollBy({
          top: scrollTo,
          behavior: "smooth"
        })
        this.autoHeight("title-content")
        this.autoHeight("content__desc")
      }
    })
   
  }



  pageChanged(number: number) {
    this.sliceData = this.data.slice((this.pageSize * (number - 1)), this.pageSize * number)
    setTimeout(()=>{
      this.autoHeight("title-content")
        this.autoHeight("content__desc")
    })
  }
  autoHeight(className: string): void {
    const nameFeature = document.getElementsByClassName(className);
    let height = 0;
    for (let i = 0; i <= nameFeature.length - 1; i++) {
      let htmlElement = nameFeature[i] as HTMLElement
      let currentHeight = htmlElement.offsetHeight
      if (currentHeight > height) {
        height = currentHeight
      }
    }
    for (let i = 0; i <= nameFeature.length - 1; i++) {
      let htmlElement = nameFeature[i] as HTMLElement
      htmlElement.style.height = height + "px";
    }

  }

}
