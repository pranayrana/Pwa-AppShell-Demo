import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputControlComponent } from './input-control.component';
import { UpperCasePipe } from './upper-case.pipe';
import { HoverColorDirective } from './hover-color.directive';

@NgModule({
  declarations: [InputControlComponent, UpperCasePipe, HoverColorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ 
    InputControlComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    HoverColorDirective]
})
export class SharedModule { }
