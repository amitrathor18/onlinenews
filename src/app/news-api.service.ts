import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = 'b38474a5147844eb8d155a8b6cd5e897';
  constructor(private http: HttpClient) { }

initSources() {
  return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
}
initArticles() {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
}
getArticleByID(source: String) {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
}
}