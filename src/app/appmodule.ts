import { NgModule } from "@angular/core"
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[AppComponent, BookComponent, BooklistComponent, ProductAlertComponent, ProductDetailsComponent],
    
    imports:[
    BrowserModule ,
    RouterModule.forRoot([
        {path:'',component:BooklistComponent},
        {path:'products/:name',component:ProductDetailsComponent},
    ])],

    bootstrap:[AppComponent]
})

export class AppModule{
    
} 