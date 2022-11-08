import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNewsItems () {
    return this.http.get("assets/json/news.json");
  }
}
