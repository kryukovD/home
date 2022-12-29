import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from '../../config.service';
import { PostsService,Article } from '../posts.service';
import { mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public data!:Article[]
  public cfg!:any
  public countItems:number=3
  @Output() onLoaded=new EventEmitter<boolean>()
  constructor(public postService:PostsService,private configService:ConfigService) { }


  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((config:any)=>{
      this.cfg=JSON.parse(config)
      return this.postService.getPosts(JSON.parse(config).articles)
    })).subscribe((data)=>{
      this.postService.posts=data
      this.onLoaded.emit(true)
    })
   
  }
  

}
