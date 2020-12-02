import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateDemoComponent } from './template-demo.component';
import { SharedModule } from '../shared/shared.module';
import { EditHeroComponent } from './edit-hero.component';

@NgModule({
  declarations: [TemplateDemoComponent, EditHeroComponent],
  imports: [
    SharedModule,
    TemplateFormRoutingModule
  ]
})
export class TemplateFormModule { }
