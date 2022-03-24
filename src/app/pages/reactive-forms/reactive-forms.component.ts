import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordStrength:true}: null;
  }
}

function nameExistsValidator():AsyncValidatorFn  {
  return (control: AbstractControl) => {
      return of(0)
          .pipe(
              map(user => user ? {userExists:true} : null)
          );
  }
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('');

  readonly betweenZeroHundred = Validators.compose([
    Validators.min(1),
    Validators.max(100),
  ]);

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // profileForm1 = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  profileFormBuilder = this.fb.group({
    firstName: ['',{ 
      Validators: [Validators.required], 
      asyncValidators: [nameExistsValidator()],
      updateOn: 'blur'}], 
    lastName: [''],
    password:['',[Validators.required, createPasswordStrengthValidator()]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['',this.betweenZeroHundred]
    }),
    refer: this.fb.array([
      this.fb.control('')
    ])
  });

  // profileFormBuilder = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   }),
  //   refer: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });

  get referers() {
    return this.profileFormBuilder.get('refer') as FormArray;
  }

  addReferers() {
    this.referers.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.profileFormBuilder);
  }

  get formAddress(){
    return this.profileFormBuilder.get('address') as FormGroup;
  }

  // onSubmit() {
  //   console.log(this.profileForm.value);
  // }

  updateProfileForm1() {
    this.profileFormBuilder.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
