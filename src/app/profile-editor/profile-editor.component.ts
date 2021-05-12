import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    Address : new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zip:new FormControl('')

    }),
     aliases : this.fb.array([
       this.fb.control('')

     ])
  });

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateName(){
    this.profileForm.patchValue({
      firstName:'gurs',
      address:{
        street:'123 , cape town'
      }

    })
  }
  constructor(private fb:FormBuilder){}
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

}
