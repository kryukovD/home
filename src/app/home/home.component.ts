import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ConfigService } from '../../config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobileMenu:boolean=false
  sectionId?:string
  countLoadedBlocks=0
  constructor(private configService:ConfigService ,private route:Router) { 
    if(this.route.getCurrentNavigation()?.extras.state)
    this.sectionId= this.route.getCurrentNavigation()?.extras.state!.id
  }

  ngOnInit(): void {
    
    const anchors=document.querySelectorAll(".link")
    for (let i=0;i<anchors.length;i++){
      anchors[i].addEventListener('click',function(e:Event){
        e.preventDefault()
        const blockID=anchors[i].getAttribute('href')
        if(blockID!==null && blockID!=="/"){
        document.querySelector(blockID)!.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      })
    }
  }

  ngDoCheck(){
    if(this.countLoadedBlocks==4){
      if(this.sectionId){
        const offsetTop = document.querySelector("header")!.offsetHeight
        const elementPosition = document.getElementById(`${this.sectionId}`)!.getBoundingClientRect().top - offsetTop
        window.scrollBy({
          top: elementPosition,
          behavior: "smooth"
        })
      }
      this.countLoadedBlocks=0
    }
  }
  increasedBlock(increased:boolean){
    increased==true?this.countLoadedBlocks++:this.countLoadedBlocks
    
  }
  toggleMenu():void{
    this.mobileMenu=!this.mobileMenu;
  }

}
