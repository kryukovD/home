import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { ConfigService } from '../../config.service';
import { Article, PostsService } from '../posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {
  article?:Article
  mobileMenu: boolean = false;
  loaded:Subject<boolean>=new Subject<boolean>()
  constructor(public postsService:PostsService, private route:ActivatedRoute,private configService:ConfigService) { 
   
    
  }

  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((cfg)=>{
      return this.postsService.getPostById(JSON.parse(cfg).articles,this.route.snapshot.params['id'])
    })).subscribe((article:Article)=>{
      this.article=article
      this.loaded.next(true)
    })
   

  }
  ngAfterViewInit(){
    this.loaded.pipe(delay(500)).subscribe(()=>{
      const section = document.querySelector("#detail")
      const height = document.querySelector("header")!.offsetHeight
      const offset = section!.getBoundingClientRect().top - height
      window.scrollBy({
        top: offset,
        behavior: "smooth"
      })
    })
  }
  
 


}
