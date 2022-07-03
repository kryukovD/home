import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private configService:ConfigService,private http:HttpClient) {
     
  }
  getFeatureByCount(url:any,count:number){
    return this.http.get(url+count)
  }
  

  
}
