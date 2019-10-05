import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private pno:number=0;
  // 已显示的产品列表
private productList:object[]=[];
// 新请求的产品列表
private newList:object[]=[];
private bottomtext:boolean=false;
//构造异步请求变量http
  constructor(private http:HttpClient) { }
  //定义上拉时，调用分页显示函数，并且在请求不到数据时，禁用上拉，同时显示无更多数据了
  loadData(event) {
    this.loadList();
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.newList.length == 0) {
        event.target.disabled = true;
        this.bottomtext = true;
      }
    }, 500);
  }
  // 定义异步请求分布函数
loadList(){
  this.pno++;
  let url=`http://www.codeboy.com/data/product/list.php?pno=${this.pno}`
  this.http.get(url).subscribe((res:any)=>{
    this.newList=res.data;
    this.productList=this.productList.concat(this.newList);
    console.log(this.productList);
  })
}
// toggleInfiniteScroll() {
//   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
// }

  ngOnInit() {
    this.loadList();
  }

}
