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
  // 定义购物车清单变量，用于接收当前用户数据库中的全部清单
  private cartList: object[];
  constructor(private http: HttpClient) {}
  // 商品数量减少按钮，减少到0时，删除此条商品（修改的为内存中cartList的数据）
  reduce(i) {
    this.cartList[i]['count']--;
    if(this.cartList[i]['count']==0){this.cartList.splice(i,1)}
    console.log(this.cartList);
  }
  // 商品数量增加按钮（修改的为内存中cartList的数据）
  add(i) {
    this.cartList[i]['count']++;
    console.log(this.cartList);
  }
  // 向服务器请求购物车内容
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
  // 页头返回按钮
  jump() {
    window.history.go(-1)
  }

  ngOnInit() {
    this.loadcart()
  }

}