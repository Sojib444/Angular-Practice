import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BooklistComponent} from '../booklist/booklist.component';
import { Product } from '../Model/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?:Product;

  constructor(private route:ActivatedRoute)
  {

  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const productIdFromRoute = String(routeParams.get('name'));

    // Find the product that correspond with the id provided in route.
    this.product = new BooklistComponent().books.find(product => product.name === productIdFromRoute);

  }   
}
