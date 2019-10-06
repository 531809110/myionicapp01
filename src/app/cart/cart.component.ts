import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartList: object[];
  private localCount:number;
  constructor(private http: HttpClient) {}
  reduce(i) {
    this.cartList[i]['count']--;
    if(this.cartList[i]['count']==0){this.cartList.splice(i,1)}
    console.log(this.cartList);
  }
  add(i) {
    this.cartList[i]['count']++;
    console.log(this.cartList);
  }
  loadcart() {
    let uid = JSON.parse(localStorage.getItem('uid'));
    console.log(uid);
    let url = `http://127.0.0.1:8080/carts?uid=${uid}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.cartList = res.data;
      console.log(this.cartList);
    });
  }
  jump() {
    window.history.go(-1)
  }

  ngOnInit() {
    this.loadcart()
  }

}