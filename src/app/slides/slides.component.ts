import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  private slides:object[]=[];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private http:HttpClient) { };
public loadslides():void{
  let url=' http://www.codeboy.com/data/product/index.php'
  this.http.get(url).subscribe((res:any)=>{
    this.slides=res.carouselItems;
    console.log(this.slides)
  })
}
  ngOnInit() {
    this.loadslides();
  }
}