import { Component } from '@angular/core';
import { Product } from '../Model/Products';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
    books:Product[] = [{name:"C#",description:"This book is written by Jalal Sir",Price: 701},
                       {name:"Javascript",description:"This is also known as toy language",Price:600},
                       {name:"Kotlin",description:null,Price:700},
                       {name:"Java",description:"Its best android app development",Price:800}];

    Shared()
    {
      window.alert("The book is shared");
    }

    onNotify()
    {
      window.alert("You are notify from child component");
    }
}
