import { Component, OnInit } from '@angular/core';
//import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// export class FormFieldErrorExample {
//   email = new FormControl('', [Validators.required, Validators.email]);

//   getErrorMessage() {
//     return this.email.hasError('required') ? 'You must enter a value' :
//         this.email.hasError('email') ? 'Not a valid email' :
//             '';
//   }
// }
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
