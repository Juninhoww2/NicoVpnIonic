import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public logo = "https://www.flaticon.com/svg/vstatic/svg/179/179319.svg?token=exp=1611078494~hmac=ebfa905ea68b5b6847aff8e21b68509b" 
  constructor() { }

  ngOnInit() {
  }
}
