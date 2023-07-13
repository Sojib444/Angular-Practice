import { Component} from '@angular/core';
import { Product } from '../Model/Products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-cart',
  templateUrl: './service-cart.component.html',
  styleUrls: ['./service-cart.component.css']
})

export class ServiceCartComponent {

  products:Product[] = [];

  constructor(private http: HttpClient)
  {

  }

  //Add to cart
  addToCart(product:Product)
  {
    this.products?.push(product);
  }

  //getAllitems
  getItems()
  {
    return this.products;
  }

  //clear cart item
  clearacart()
  {
    this.products = [];
    return this.products;
  }

  getShipingPrices()
  {
    let json = this.http.get("https://www.boredapi.com/api/activity").subscribe(
      response=>{
        console.log(response);
      }
    );

    json.unsubscribe()
    console.log(json);
  }

  getShipingJsonData()
  {
    let getLocalJson = this.http.get<{Day:String, Price:Number}[]>("/assets/shiping.json");
    return getLocalJson;
  }

}
