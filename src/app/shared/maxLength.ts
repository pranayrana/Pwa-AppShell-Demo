import { ValidatorFn, AbstractControl } from '@angular/forms';


export function maxLength(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean;} | null => {
      if(control.value)
        return null;
    return { custom: true };
  };
}