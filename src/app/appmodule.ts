import { NgModule } from "@angular/core"
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
    declarations:[AppComponent, BookComponent, BooklistComponent, ProductAlertComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule{

}