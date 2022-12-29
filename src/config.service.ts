import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  url:string="http://krykov-studio.ru/config/"
  public config:any
  constructor(private http:HttpClient) { 
      
  }
 
  getConfig():Observable<any>{
    return this.http.get(this.url)
  }
 
  
}
