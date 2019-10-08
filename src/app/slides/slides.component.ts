import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  @Input()
  private slides:object[]=[];
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild("myAd",{static:true})
  private myAd;
  constructor(private http:HttpClient) { };
// public loadslides():void{
//   let url=' http://www.codeboy.com/data/product/index.php'
//   this.http.get(url).subscribe((res:any)=>{
//     this.slides=res.carouselItems;
    // console.log(this.slides)
  // })
// }
  ngOnInit() {
    // this.loadslides();
    this.myAd.startAutoplay();
  }
}