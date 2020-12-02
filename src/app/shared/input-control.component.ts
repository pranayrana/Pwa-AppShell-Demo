import { Component, OnInit, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.less']
})
export class InputControlComponent implements OnInit {

  @ContentChild(NgControl,  { static : true}) control!:NgControl;

  constructor() { }

  ngOnInit() {
  
  }

  isValid() {
    if(this.control.dirty){
    return this.control.invalid && this.control.errors;
  }
  return true;
 }
}
