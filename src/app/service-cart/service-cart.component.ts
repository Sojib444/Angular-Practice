import { Component } from '@angular/core';
import { Product } from '../Model/Products';

@Component({
  selector: 'app-service-cart',
  templateUrl: './service-cart.component.html',
  styleUrls: ['./service-cart.component.css']
})
export class ServiceCartComponent {

  products:Product[] = [];

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

}
