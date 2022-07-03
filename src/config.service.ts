import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url:string="http://127.0.0.1:8000/config"
  public config:any
  constructor(private http:HttpClient) { 
      
  }
 
  getConfig(){
    return this.http.get(this.url)
  }
 
  
}
