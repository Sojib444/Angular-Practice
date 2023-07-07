import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {
  title = 'Karim';
  classes = "green";
  canClick = false;
  massage = "Hello World";

  Onchange()
  {
    console.log("Hello world");
  }
}
