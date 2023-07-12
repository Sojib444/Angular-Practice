import { Component } from '@angular/core';
import { ServiceCartComponent } from '../service-cart/service-cart.component';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {

  items = this.cartService.getItems();
  api = this.cartService.getShipingPrices();
  
  constructor(private cartService:ServiceCartComponent)
  {
      
  }
}
