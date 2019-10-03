import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
private productList:object[]=[]
  constructor(private http:HttpClient) { }
loadList(){
  let url="http://www.codeboy.com/data/product/list.php?pno=2"
  this.http.get(url).subscribe((res:any)=>{
    this.productList=res.data;
    console.log(this.productList)
  })
}
  ngOnInit() {
    this.loadList();
  }

}
