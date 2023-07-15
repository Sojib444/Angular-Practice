import { NgModule } from "@angular/core"
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from "@angular/router";
import { ServiceCartComponent } from './service-cart/service-cart.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ShipingComponent } from './siping/shiping.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[AppComponent, BookComponent, BooklistComponent, ProductAlertComponent,
         ProductDetailsComponent, ServiceCartComponent, CartComponentComponent, ShipingComponent],
    imports:[
    HttpClientModule,
    BrowserModule ,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {path:'',component:BooklistComponent},
        {path:'products/:name',component:ProductDetailsComponent},
        {path:'cart',component:CartComponentComponent},
        {path:'shiping',component:ShipingComponent},
    ])],

    providers:[ServiceCartComponent,HttpClient],

    bootstrap:[AppComponent]
})

export class AppModule{
    
} 