import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private http:HttpClient,private configService:ConfigService) {
     
   }
   getLastWorks(url:string):Observable<Work[]>{
     return this.http.get<Work[]>(url)
   }
   getAllWorks(url:string):Observable<Work[]>{
    return this.http.get<Work[]>(url)
   }
  
}
export interface  Work{
   id:Number,
   src:string,
   link:string
}
