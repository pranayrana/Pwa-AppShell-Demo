import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewHeroComponent } from './new-hero.component';
import { CanDeActivateGuard } from './can-de-activate.guard';

const routes: Routes = [
 {path:'', component: NewHeroComponent, canDeactivate : [CanDeActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFromRoutingModule { }
