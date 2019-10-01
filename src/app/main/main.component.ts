import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http:HttpClient) { };
public loadMain():void{
  let url=''
  this.http.get(url).subscribe((res:any)=>{console.log(res)});
}

  ngOnInit() {
    this.loadMain();
  }

}
