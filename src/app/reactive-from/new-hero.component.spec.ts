import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewHeroComponent } from './new-hero.component';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

describe('NewHeroComponent', () => {
  let component: NewHeroComponent;
  let fixture: ComponentFixture<NewHeroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeroComponent ],
      providers: [FormBuilder],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid at load', () => {
    expect(component.heroForm.invalid).toBeTruthy();
  });

  it('Enter value and validate form', () => {
    component.heroForm.get('name').setValue('pranay');
    component.heroForm.get('id').setValue('1');
    fixture.detectChanges();
    expect(component.heroForm.valid).toBeTruthy();
  });

});
