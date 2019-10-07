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
  //用户uid
  private uid:number;
  //登录状态，初始化为未登录
  private loginStatus:boolean=false;
  //购物车里是否有东西,初始化为空
  private cartVoid:boolean=true;

  constructor(private http: HttpClient) {}
  // 商品数量减少按钮，减少到0时，删除此条商品（修改的为内存中cartList的数据）
  reduce(i) {
    this.cartList[i]['count']--;
    if(this.cartList[i]['count']==0){this.cartList.splice(i,1)}
    // console.log(this.cartList);
  }
  // 商品数量增加按钮（修改的为内存中cartList的数据）
  add(i) {
    this.cartList[i]['count']++;
    // console.log(this.cartList);
  }
  // 向服务器请求购物车内容
  loadcart() {
    this.uid = JSON.parse(localStorage.getItem('uid'));
    console.log(this.uid);
    if(Number(this.uid)==0){console.log("666");return;}
    console.log(this.uid);
    this.loginStatus=true;
    let url = `http://47.94.227.93:8080/carts?uid=${this.uid}`;
    this.http.get(url).subscribe((res: any) => {
      // console.log(res);
      this.cartList = res.data;
      if(this.cartList.length>0){this.cartVoid=false;}
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