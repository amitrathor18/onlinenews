import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  // public list: any = [
  //   // { title: 'Nodejs', show: false },
  //   // { title: 'Javascript', show: true },
  //   // { title: 'Angular', show: true },
  //   // { title: 'express', show: true },
  //   // { title: 'ajax', show: true },
  //   // { title: 'bootstrap', show: true },
  // ];
  public list: any = [];
  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
    this.makeAjaxCall();
  }
  async makeAjaxCall() {
    // const url =
    //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=b38474a5147844eb8d155a8b6cd5e897';
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const results = await this.http.get(url).toPromise();
    this.list = results;
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
