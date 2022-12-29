import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ConfigService } from '../../config.service';
import { Banner, BannersService } from '../banners.service';
declare var VANTA:any;

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {
  @Output() onChange = new EventEmitter<boolean>()
  @Output() onLoaded = new EventEmitter<boolean>()
  activeSection:boolean=false
  cfg?:any
  banners?:Banner[]
  constructor(private configService:ConfigService,private bannersService:BannersService,private router:Router) { }

  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((cfg:any)=>{
      this.cfg=cfg
      return this.bannersService.getAllBanners(JSON.parse(this.cfg).allBanners)
    })).subscribe(data=>{
      this.banners=data
      this.onLoaded.emit(true)
      VANTA.BIRDS({
        el:".section-main",
        backgroundColor:"#f6eee9",
        color1: "#e9696a",
        color2: "#fac81b",
        waveHeight: 20,
        shininess: 50,
        waveSpeed: 1.5,
        zoom: 0.75
      })
    })
   
  }
  changeStateMenu(){
    this.onChange.emit(true);
  }
  refToWorks(){
    if(this.router.url=="/works/all"){
    const section = document.querySelector("#all_works")
    const height = document.querySelector("header")!.offsetHeight
    const offset = section!.getBoundingClientRect().top - height
    window.scrollBy({
      top: offset,
      behavior: "smooth"
    })
  }

}

  

}
