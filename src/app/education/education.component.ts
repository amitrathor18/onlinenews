import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public imgsrc = 'assets/me.jpg';

  public list = [
    { img: 'assets/n2.jpg' },
    { img: 'assets/n3.jpg' },
    { img: 'assets/n4.jpg' },
    { img: 'assets/n5.jpg' },
    { img: 'assets/n6.jpg' },
    { img: 'assets/n7.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}