import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  config:any
  posts?:Article[]
  constructor(private http:HttpClient) { 
 
  }
  getPosts(url:string):Observable<Article[]>{
    return this.http.get<Article[]>(url)
  }
  
  getPostById(url:string,id:number):Observable<Article>{
    return this.http.get<Article>(url+id)
  }
}
export interface Article{
  id:number,
  desc:string,
  image:string,
  person_image:string,
  date:Date
  title:string,
  html:string
}
