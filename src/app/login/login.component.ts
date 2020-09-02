import { Component, OnInit } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faLock } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // // public faGoogle = faGoogle;
  // public faUser = faUser;
  // public faLock = faLock;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  // async loginProcessHere() {
  //   const data = this.fbFormGroup.value;

  //   // ajax call check the local mysql api to  verify username and password
  //   const url = 'http://localhost:3000/auth-user';
  //   const result: any = await this.http.post(url, data).toPromise();
  //   if (result.opr) {
  //     sessionStorage.setItem('sid', 'true');
  //     this.router.navigate(['home']);
  //   } else {
  //     this.uiInvalidCredential = true;
  //   }
  // }
  loginProcessHere() {
    const data = this.fbFormGroup.value;

    if (data.username === 'amit' && data.password === 'admin') {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
