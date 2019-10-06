import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss'],
})
export class AddcartComponent implements OnInit {
  constructor(private http:HttpClient) { }
  addcart({lid:lid,title:title,subtitle:subtitle,price:price}){
  let uid=JSON.parse(localStorage.getItem('uid'));
  // console.log(uid);
  let url=`http://47.94.227.93:8080/addcart?lid=${lid.lid}&title=${title.title}&subtitle=${subtitle.subtitle}&price=${price.price}&uid=${uid}`;
  this.http.get(url).subscribe((res:any)=>{
    // console.log(res);
  });
}

  ngOnInit() {
  }

}
