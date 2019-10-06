import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  ActivatedRoute,Router
} from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //购物车内的产品数量
  private count: number=0;
  //产品lid
  private lid: number;
  //产品图片列表组---包含大中小三种图
  private picList: object = {};
  // 产品详细描述
  private details: object = {};
  // 产品大类别
  private fname: string = "";
  //产品图片列表，提取中图---用于轮播图
  private carouselItems: object[] = [];
  private detailImgs = [];
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,public toastController: ToastController) {};
  // 添加购物车时，如果没有登录，提示请先登录
  async loginToast() {
    const toast = await this.toastController.create({
      message: '请先登录',
      duration: 500,
      // position:"middle"
    });
    toast.present();
  }
   // 添加购物车时，已登录，添加成功时提示添加成功
  async addToast() {
    const toast = await this.toastController.create({
      message: '成功添加到购物车',
      duration: 500,
      // position:"middle"
    });
    toast.present();
  }
  addcart(){
    let uid=JSON.parse(localStorage.getItem('uid'));
    // console.log("66666"+uid);
    // 如果没有登录（uid=""），提示登录
if(!uid){this.loginToast()}
    let url=`http://47.94.227.93:8080/addcart?lid=${this.details['lid']}&title=${this.details['title']}&subtitle=${this.details['subtitle']}&price=${this.details['price']}&uid=${uid}`;
    this.http.get(url).subscribe((res:any)=>{
      // console.log(res);
      if(res.code==1){
      this.addToast();}
    });
  }
  // addcart(){
  //   this.count++;
  // console.log(this.count)};
  jump(){
    // this.router.navigateByUrl(url)
    window.history.go(-1)
  }
//异步请求函数---请求上面变量的数据
  loadDetail() {
    let url = `http://www.codeboy.com/data/product/details.php?lid=${this.lid}`;
    this.http.get(url).subscribe((res: any) => {
      // console.log(res)
      this.details = res["details"];
      this.picList = res["details"]["picList"];
      //数据库传回的是一段HTML代码的字符串，无法直接使用，使用正则抠出图片src地址
      this.detailImgs=res["details"]["details"].match(/\bsrc=".*?">/g);
      for(let key in this.detailImgs){
        this.detailImgs[key]=this.detailImgs[key].slice(5,-2);
      }
      for(let key in this.detailImgs){
        //图片src地址有本地及网络两种，使用三目分别重新定义不同格式的网址
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
      // console.log(this.detailImgs);
    })
  }
  ngOnInit() {
    //提取网址传递的lid变量值，保存到lid变量中
    this.route.params.subscribe((data) => {
      this.lid = data.lid
    })
    // console.log(this.lid)
    //调用异步请求函数，初始化各项数据
    this.loadDetail();
    // this.detail();
  }

}