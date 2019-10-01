import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
private pid:number;
  constructor(private http:HttpClient,private route:ActivatedRoute) { };
  
loadDetail(){
  let url=`http://www.codeboy.com/data/product/details.php?pid=${this.pid}`;
  this.http.get(url).subscribe((res:any)=>{console.log(res)})
}
  ngOnInit() {
    this.route.params.subscribe(data=>{this.pid=data.pid})
    this.loadDetail();
  }

}
