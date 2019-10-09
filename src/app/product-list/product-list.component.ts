import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
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
//双向绑定搜索框内容
private searchText:string;
//加载到底部开关
private bottomtext:boolean=false;
@ViewChild("myScroll",{static:true})
private infiniteScroll;
//构造异步请求变量http
  constructor(private http:HttpClient) { }
  // 页头返回按钮
  jump() {
    window.history.go(-1)
  }
  //定义搜索框搜索函数:当搜索框内容改变时，发送查询请求
  search(){
    if(this.searchText!=""){
    let url=`http://www.codeboy.com/data/product/list.php?kw=${this.searchText}`
  this.http.get(url).subscribe((res:any)=>{
    this.productList=res.data;
    // console.log(this.productList);
  })}else if(this.searchText==""){
    this.productList=[];
    this.newList=[];
    this.pno=0;
    this.loadList();
  }
  }
  //定义上拉时，调用分页显示函数，并且在请求不到数据时，禁用上拉，同时显示无更多数据了
  loadData(event) {
    this.loadList();
    setTimeout(() => {
      // console.log('Done');
      this.infiniteScroll.complete();
      if (this.newList.length == 0) {
        this.infiniteScroll.disabled = true;
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
    // console.log(this.productList);
  })
}
toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

  ngOnInit() {
    this.loadList();
  }

}
