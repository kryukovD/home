import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../config.service';
import { FeatureService } from '../../feature.service';
import {delay, mergeMap} from "rxjs/operators"
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-feature',
  templateUrl: './detail-feature.component.html',
  styleUrls: ['./detail-feature.component.scss']
})
export class DetailFeatureComponent implements OnInit {
  id?:Number
  article:any
  loaded:Subject<boolean>=new Subject<boolean>()

  constructor(private route:ActivatedRoute,private featureService:FeatureService,private congifService:ConfigService ) { 

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      this.id=Number(params.get('id'))
      this.congifService.getConfig().pipe(mergeMap(cfg=>this.featureService.getById(JSON.parse(cfg).feature_by_id+this.id))).subscribe((article:any)=>{
        this.article=article
        this.loaded.next(true)
      })
    })
   
  }
 
  ngAfterViewInit(){
    this.loaded.pipe(delay(500)).subscribe(()=>{
      const section = document.querySelector("#detail_feature")
      const height = document.querySelector("header")!.offsetHeight
      const offset = section!.getBoundingClientRect().top - height
      window.scrollBy({
        top: offset,
        behavior: "smooth"
      })
    })
  }
}
