import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) { }
  getAllBanners(url: string): Observable<Banner[]> {
    return this.http.get<Banner[]>(url)
  }
}
export interface Banner {
  title: string,
  desc: string
}
