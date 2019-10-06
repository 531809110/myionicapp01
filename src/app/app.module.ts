import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlidesComponent } from './slides/slides.component';
import { FormsModule } from '@angular/forms';
import { AddcartComponent } from './addcart/addcart.component';
import { MoneyPipe } from './money.pipe';

const routes = [
  {path:"",redirectTo:'index',pathMatch:'full'},
  {path:"index",component:IndexComponent},
  {path:"detail/:lid",component:ProductDetailComponent},
  {path:"list",component:ProductListComponent},
  {path:"login",component:UserLoginComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserLoginComponent,
    NotFoundComponent,
    SlidesComponent,
    AddcartComponent,
    MoneyPipe,
  ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
