import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
private indextuijian:object[]=[];
private indexNew:object[]=[];
private indexHot:object[]=[];
private carouselItems:object[]=[];
  constructor(private http:HttpClient) { }
loadIndex(){
  let url='http://www.codeboy.com/data/product/index.php';
  this.http.get(url).subscribe((res:any)=>{
    this.indextuijian=res.newArrivalItems;
    this.indexNew=res.recommendedItems;
    this.indexHot=res.topSaleItems;
    this.carouselItems=res.carouselItems;
    console.log(this.carouselItems);
  })
}
  ngOnInit() {
    this.loadIndex();
  }

}
