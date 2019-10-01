import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http:HttpClient) { }
loadcart(){
  let url="";
  this.http.get(url).subscribe((res:any)=>{console.log(res);});
}
  ngOnInit() {
  }

}
