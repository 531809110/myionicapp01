import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private http:HttpClient) { }
loadList(){
  let url="http://www.codeboy.com/data/product/list.php?pno=2&kw=dell"
  this.http.get(url).subscribe((res:any)=>{console.log(res)})
}
  ngOnInit() {
    this.loadList();
  }

}
