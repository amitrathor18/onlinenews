import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { HttpClient } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;

  // public list: any = [
  //   // { title: 'Nodejs', show: false },
  //   // { title: 'Javascript', show: true },
  //   // { title: 'Angular', show: true },
  //   // { title: 'express', show: true },
  //   // { title: 'ajax', show: true },
  //   // { title: 'bootstrap', show: true },
  // ];
  public list: any = [];
  constructor(
    private modalService: NgbModal,
     private http: HttpClient,
     private newsapi: NewsApiService) {}

  ngOnInit() {
    // this.makeAjaxCall();
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);

  }
  // async makeAjaxCall() {
  
  //   // const url =
  //   //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=b38474a5147844eb8d155a8b6cd5e897';
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const results = await this.http.get(url).toPromise();
  //   this.list = results;
    
  // }
  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi.getArticleByID(source).subscribe(data => this.mArticles = data['articles']);
  }


  showDetailsModal(item) {
    console.log(item);

    const modalRef = this.modalService.open(DetailsModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.data = item;
  }
}
