import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { LoginModel } from '../../model/login-model.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MasterServiceService } from '../../service/master-service.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  //form: FormGroup;

  _logindata: LoginModel = {
    username: '',
    password: ''
  }

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });
  // }

  constructor(private service: MasterServiceService, private router:Router){

  }
  ngOnInit(): void {
    
  }

  // get usernameControl(): FormControl {
  //   return this.form.get('username') as FormControl;
  // }

  // get passwordControl(): FormControl {
  //   return this.form.get('password') as FormControl;
  // }

  ProceedLogin(form: any) {
    if (form.valid) {
      this.service.Proceedlogin(this._logindata);
      // this.service.Proceedlogin(this._logindata).subscribe(item => {
      //   let _resp = item;
      //   if(_resp.length>0){
      //     localStorage.setItem('username',this._logindata.username);
      //     this.router.navigateByUrl('');
      //   }else{
      //     alert('Invalid credentials');
      //   }
      // })
    }

  }

}
