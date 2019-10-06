import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  //推荐楼层数据---1F
private indextuijian:object[]=[];
//上新楼层数据---2F
private indexNew:object[]=[];
//热卖楼层数据---3F
private indexHot:object[]=[];
// 轮播图数据
private carouselItems:object[]=[];
//定义异步请求变量http
  constructor(private http:HttpClient) { }
  // 定义异步请求函数，向服务器请求数据，并赋值给相关楼层变量
loadIndex(){
  let url='http://www.codeboy.com/data/product/index.php';
  this.http.get(url).subscribe((res:any)=>{
    this.indextuijian=res.newArrivalItems;
    this.indexNew=res.recommendedItems;
    this.indexHot=res.topSaleItems;
    this.carouselItems=res.carouselItems;
    // console.log(this.carouselItems);
  })
}
//初始化时，调用异步请求函数
  ngOnInit() {
    this.loadIndex();
  }

}
