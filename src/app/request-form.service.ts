import { HttpClient, HttpHeaders,HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class RequestFormService {
  config?:any
  constructor(private congfigSevice:ConfigService,private http:HttpClient, private tokenService:HttpXsrfTokenExtractor) { 
    this.congfigSevice.getConfig().subscribe((data:any)=>{
      this.config=data
    })
  }
  sendFormToServer(data:Request):Observable<Request>{
    const token=document.querySelector("meta[name='csrf-token']")!.getAttribute("content")
    return this.http.post<Request>(JSON.parse(this.config).insertRequestForm,data,{headers: new HttpHeaders({"Access-Control-Allow-Origin'":"*","X-CSRF-TOKEN":`${token}`})})
  }
  
}
interface Request{
  name:string,
  email:string,
  message:string
}