import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { ConfigService } from '../../config.service';
import { Article, PostsService } from '../posts.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  cfg?: any
  data?: Article[] = []
  sliceData?: Article[]
  pageSize = 5
  currentPage: number = 1
  countPages?: number
  length!: number
  loadData: Subject<boolean> = new Subject<boolean>()
  loadBannersData: Subject<boolean> = new Subject<boolean>()


  constructor(private http: HttpClient, private postsService: PostsService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((cfg: any) => {
      this.cfg = JSON.parse(cfg)
      return this.postsService.getPosts(this.cfg.articles)
    })).subscribe((data: Article[]) => {
      this.data = data
      this.length = data!.length
      this.sliceData = this.data!.slice(0, this.pageSize)
      this.countPages = Math.ceil(data.length / this.pageSize)
      this.loadData.next(true)

    })
  }
  pageChanged(number: number) {
    this.sliceData = this.data!.slice((this.pageSize * (number - 1)), this.pageSize * number)
  }
  dataCompleteHandler() {
    this.loadBannersData.next(true)
  }
  ngAfterViewInit() {
    this.loadData.subscribe(() => {
      this.loadBannersData.pipe(delay(20)).subscribe(() => {
        const section = document.querySelector("#all_article_list")
        const height = document.querySelector("header")!.offsetHeight
        const offset = section!.getBoundingClientRect().top - height
        window.scrollBy({
          top: offset,
          behavior: "smooth"
        })
      })
    })





  }


}
