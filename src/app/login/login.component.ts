import { Component, OnInit } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{faUser} from '@fortawesome/free-solid-svg-icons'
// import{faGoogle} from'@fortawesome/free-brands-svg-icons'

import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // public faGoogle = faGoogle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
