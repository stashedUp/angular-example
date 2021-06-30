import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      fullname: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      resumetype: 1
  });

  }

  ngOnInit(): void {
  }

  //https://www.itsolutionstuff.com/post/angular-10-bootstrap-modal-exampleexample.html
//https://www.itsolutionstuff.com/post/angular-10-radio-button-reactive-form-exampleexample.html
  resumeType(num : any) {
    console.log(num)
    if (num === 2) {
        this.myForm.patchValue({ resumetype: 2 });
    } else if (num === 1) {
        this.myForm.patchValue({ resumetype: 1 });
    }
  }

}


