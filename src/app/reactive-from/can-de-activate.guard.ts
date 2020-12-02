import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewHeroComponent } from './new-hero.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeActivateGuard implements CanDeactivate<NewHeroComponent> {
 canDeactivate(component: NewHeroComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
  if(component.heroForm.invalid){
    alert('validate form first');
    return false;
  }
   return true; 
 }
}
