import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { CustomValidators } from '../custom-validators'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup

  sectors: {}[] = [
    { id: 1, sectorName: 'Public' },
    { id: 2, sectorName: 'Private' },
    { id: 3, sectorName: 'Others' }
  ]

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        CustomValidators.invalidName
      ]),
      password: new FormControl(null, [Validators.required], CustomValidators.asyncInvalidName),
      designation: new FormControl('Private'),
      specificSector: new FormControl(),
      hobbies: new FormArray([])
    })
  }

  onSave() {}

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required)
  //   ;(<FormArray>this.signUpForm.get('hobbies')).push(control)
  // }

  // getControls() {
  //   return (<FormArray>this.signUpForm.get('hobbies')).controls
  // }
}
