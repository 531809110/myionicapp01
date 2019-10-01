import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private http:HttpClient) { }
loadLogin(){
// this.http.post(url)
}
  ngOnInit() {
    this.loadLogin();
  }

}
