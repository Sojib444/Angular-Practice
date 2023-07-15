import { Component, OnInit } from '@angular/core';
import { ServiceCartComponent } from '../service-cart/service-cart.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.css']
})
export class ShipingComponent implements OnInit{

  shipingCost$?:Observable<any[]>;

  constructor(private service:ServiceCartComponent)
  {

  }

  ngOnInit(): void {
    this.shipingCost$ = this.service.getShipingJsonData();
    console.log(this.shipingCost$);
  }
}
