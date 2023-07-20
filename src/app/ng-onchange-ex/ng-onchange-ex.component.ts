import { Component, Input, OnChanges, Output, SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-ex',
  templateUrl: './ng-onchange-ex.component.html',
  styleUrls: ['./ng-onchange-ex.component.css']
})

export class NgOnchangeExComponent implements OnChanges {

  @Input() school?:String;
  @Output() SchoolChanges = new EventEmitter();

  CuurentSchool?:String;
  PreviouSchool?:String;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['school'])
    {
      this.CuurentSchool = changes["school"].currentValue;
      this.PreviouSchool = changes["school"].previousValue;
    }
  }
}
