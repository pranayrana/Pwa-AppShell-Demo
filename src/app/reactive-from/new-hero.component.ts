import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { maxLength } from '../shared/maxLength';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.less']
})
export class NewHeroComponent implements OnInit {

  heroForm!: FormGroup;

  constructor(private fb:FormBuilder) { 
  }

  get nameErrors() {
    return this.heroForm.get('name')!.errors;
  }

  ngOnInit() {
  this.heroForm =this.fb.group({
                'id' : new FormControl('', Validators.required),
                'name' : new FormControl('',[Validators.required, Validators.minLength(3), maxLength()])
              }
      );
  
  // this.heroForm.patchValue({id:10,name:'pranay'});

      this.heroForm.get('name')!.valueChanges.subscribe(
        val => this.heroForm.get('name')!.setValue((val as string).toUpperCase(),{emitEvent:false} )
      );
  }

  save() {

  }

  cancel(){
    
  }
}
