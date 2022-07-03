import { Component, Injectable, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { FeatureService } from '../../feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  config?:any
  data:any
  constructor( public configService:ConfigService, private featureService:FeatureService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe((cfg)=>{
      this.config=JSON.parse(cfg.toString())
       this.featureService.getFeatureByCount(this.config.feature,4).subscribe((data)=>{
         this.data=data
       })
    })
    const feature=document.querySelectorAll(".feature-items .btn-site");
    this.autoHeight("title-content")
    this.autoHeight("content__desc")
    feature.forEach((el)=>{
      el.addEventListener("mouseover",(e)=>{
        const target=e.currentTarget as any;
        const parent=target.parentNode
        parent.childNodes[0].classList.add("active")
        const fitstParent=parent.parentNode
        const img=fitstParent.childNodes[0].firstChild.classList.add("active")
     
        
      })

      el.addEventListener("mouseout",(e)=>{
        const target=e.currentTarget as any;
        const parent=target.parentNode
        parent.childNodes[0].classList.remove("active")
        const fitstParent=parent.parentNode
        const img=fitstParent.childNodes[0].firstChild.classList.remove("active")
     
        
      })
    });
   
    window.addEventListener("resize",()=>{
      this.autoHeight("title-content")
      this.autoHeight("content__desc")
    });

    
  }
   autoHeight(className:string):void {
    const nameFeature=document.getElementsByClassName(className); 
      let height=0;
      for(let i=0;i<=nameFeature.length-1;i++){
        let htmlElement=nameFeature[i] as HTMLElement
        let currentHeight=htmlElement.offsetHeight  
        if(currentHeight>height){
          height=currentHeight
        }
      }
      for(let i=0;i<=nameFeature.length-1;i++){
        let htmlElement=nameFeature[i] as HTMLElement
        htmlElement.style.height = height + "px";
      }
  
    }
   
}
