import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDemoComponent } from './template-demo.component';
import { CommonModule } from '@angular/common';
import { EditHeroComponent } from './edit-hero.component';

const routes: Routes = [
  {path:'', component:TemplateDemoComponent},
  {path:':id', component:EditHeroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule]
})
export class TemplateFormRoutingModule { }
