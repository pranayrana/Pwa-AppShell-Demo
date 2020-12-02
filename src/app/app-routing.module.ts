import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';
import { WelcomeComponent } from './welcome.component';
import { CanActivateGuard } from './can-activate.guard';

export function templateRoute()
{
  return import(`./template-form/template-form.module`).then(m=> m.TemplateFormModule);
}

export function reactiveRoute()
{
  return import('./reactive-from/reactive-from.module').then(m=> m.ReactiveFromModule);
}

export const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch: 'full'},
  {
    path:'welcome', component: WelcomeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path:'contact/:id', 
    component: ContactComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path:'template',
    loadChildren: './template-form/template-form.module#TemplateFormModule'
  },
  {
    path:'reactive',
    loadChildren: './reactive-from/reactive-from.module#ReactiveFromModule' 
  },
  {
    path:'**', component: NotFoundComponent, pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
