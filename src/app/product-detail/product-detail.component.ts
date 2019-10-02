import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private lid: number;
  private picList: object = {};
  private details: object = {};
  private fname: string = "";
  // private xq: string = "";
  private carouselItems: object[] = [];
  private detailImgs = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {};

  //  detail(){
  //   let d=document.getElementById("detail");
  //   console.log(d)
  //   d.innerHTML=this.details["details"];
  //  } 


  loadDetail() {
    let url = `http://www.codeboy.com/data/product/details.php?lid=${this.lid}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res)
      this.details = res["details"];
      this.picList = res["details"]["picList"];
      this.detailImgs=res["details"]["details"].match(/\bsrc=".*?">/g);
      for(let key in this.detailImgs){
        this.detailImgs[key]=this.detailImgs[key].slice(5,-2);
      }
      for(let key in this.detailImgs){
        this.detailImgs[key].slice(0,2)=="im" ? this.detailImgs[key]='http://www.codeboy.com/'+this.detailImgs[key]:this.detailImgs[key]='http:'+this.detailImgs[key];
      }
      for (let key in this.picList) {
        this.carouselItems.push({img:this.picList[key].md});
      }
      this.fname = res["family"]["fname"];
      // console.log(this.details);
      // console.log(this.details["details"]);
      // console.log(this.carouselItems);
      // console.log(this.fname);
      console.log(this.detailImgs);
    })
  }
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.lid = data.lid
    })
    // console.log(this.lid)
    this.loadDetail();
    // this.detail();
  }

}