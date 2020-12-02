import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFromRoutingModule } from './reactive-from-routing.module';
import { NewHeroComponent } from './new-hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewHeroComponent],
  imports: [
    SharedModule,
    ReactiveFromRoutingModule
  ]
})
export class ReactiveFromModule { }
