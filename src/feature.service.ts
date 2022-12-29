import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private configService:ConfigService,private http:HttpClient) {
     
  }
  getFeatureByCount(url:any,count:number){
    return this.http.get(url+count)
  }
  getAll(url:any):Observable<any>{
    return this.http.get<any>(url)
  }
  getById(url:string):Observable<any>{
    return this.http.get<any>(url)
  }
  

  
}
