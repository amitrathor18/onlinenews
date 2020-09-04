import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public imgsrc = 'assets/me.jpg';

  public list = [{ img: 'assets/n17.png' }];

  constructor() {}

  ngOnInit(): void {}
}
