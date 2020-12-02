import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from "@angular/platform-browser";

import { TemplateDemoComponent } from './template-demo.component';
import { InMemoryHeroService } from '../core/in-memory-hero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedModule } from '../shared/shared.module';
import { of } from 'rxjs/internal/observable/of';
import { HoverColorDirective } from '../shared/hover-color.directive';
import { defer } from 'rxjs/internal/observable/defer';

describe('TemplateDemoComponent', () => {
  let component: TemplateDemoComponent;
  let fixture: ComponentFixture<TemplateDemoComponent>;

  beforeEach(waitForAsync(() => {
    const inMemoryHeroService = jasmine.createSpyObj('InMemoryHeroService',['getHeroes']);
    inMemoryHeroService.getHeroes.and.returnValue(asyncData([{id:1, name:'pranay'}]));

    TestBed.configureTestingModule({
      declarations: [ TemplateDemoComponent ],
      providers:[
            {provide : InMemoryHeroService, useValue: inMemoryHeroService}],
      imports:[SharedModule,HttpClientTestingModule,RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDemoComponent);
    component = fixture.componentInstance;
  
  });

  it('Data loaded', fakeAsync(() => {
    // const httpTestingController =  TestBed.get(HttpTestingController);
    // const service: InMemoryHeroService = TestBed.get(InMemoryHeroService);
    // const testObj = [{id:1, name:'pranay'}];
    // fixture.detectChanges();
    
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    component.heroes$.subscribe(data =>{
        const trs = fixture.debugElement.queryAll(By.directive(HoverColorDirective));
        expect(trs.length === 1).toBeTruthy();
    });

    // const req = httpTestingController.expectOne('http://localhost:8080/api/heroes');
    // expect(req.request.method).toEqual('GET');
    // req.flush(testObj);
  }));
});


export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }
