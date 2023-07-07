import { Component,Input, Output,EventEmitter} from '@angular/core';
import { Product } from '../Model/Products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent{
  @Input() product:Product |undefined;
  @Output() notify = new EventEmitter();
}
