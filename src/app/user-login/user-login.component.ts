import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private uname: string = "";
  private upwd: string = "";
  private isError: boolean = false;
  private isNull: boolean = false;
  private isLogin: boolean = false;
  constructor(private http: HttpClient,private router: Router) {}
  quit(){
    localStorage.setItem('isLogin',JSON.stringify(false));
    localStorage.removeItem('uid');
    this.isLogin=false;
  }
  jump() {
    window.history.go(-1);
  }
  loadLogin() {
    // console.log(this.uname)
    // console.log(this.upwd)
    if (this.uname == "" || this.upwd == "") {
      this.isError = false;
      this.isNull = true;
      // console.log("并没有登录")
      // console.log(this.isNull)
      return;
    }
    let url = `http://47.94.227.93:8080/login?uname=${this.uname}&upwd=${this.upwd}`;
    // let url='http://127.0.0.1:8080/login?uname=tom&upwd=123';
    this.http.get(url).subscribe(res => {
      // 登录成功，显示用户中心，隐藏登录。
      //localStorage增加isLogin属性，储存登录状态。localStorage增加uid属性，储存用户id
      if (res['code'] == 1) {
        this.isError = false;
        this.isNull = false;
        localStorage.setItem('isLogin',JSON.stringify(true));
        localStorage.setItem('uid',JSON.stringify(res['uid']));
        this.isLogin = JSON.parse(localStorage.getItem('isLogin'));
      } else {
        this.isError = true;
        this.isNull = false;
      }
    })
  }
  ngOnInit() {
    this.isLogin = JSON.parse(localStorage.getItem('isLogin'));
  }
  // ngOnChanges(){this.router.navigateByUrl( '/usercenter' )}

}