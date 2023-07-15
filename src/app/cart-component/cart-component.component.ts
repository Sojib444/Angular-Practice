import { Component } from '@angular/core';
import { ServiceCartComponent } from '../service-cart/service-cart.component';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {

  items = this.cartService.getItems();
  api = this.cartService.getShipingPrices();
  josn= this.cartService.getShipingJsonData();

  constructor(private cartService:ServiceCartComponent,private formBuilder:FormBuilder)
  {
      
  }

  checkoutForm:FormGroup = this.formBuilder.group({
    name:"",
    address:""
})

  onSubmit(): void{
    //process to checkout data.
    this.items = this.cartService.clearacart();
    console.warn(`Your oder submitted to ${this.checkoutForm.value.address}`);
    this.checkoutForm.reset();
  }
}
