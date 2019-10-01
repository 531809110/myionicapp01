import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private http:HttpClient) { }
// loadIndex(){
//   let url='http://www.codeboy.com/data/product/index.php';
//   this.http.get(url).subscribe((res:any)=>{console.log(res);})
// }
  ngOnInit() {
    // this.loadIndex();
  }

}
