import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}
  gotoLogin(page) {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}

  async changepass() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/changepass';
   
      const result: any = await this.http.post(url, data).toPromise();
  
    this.fbFormGroup.reset();
  }
}
