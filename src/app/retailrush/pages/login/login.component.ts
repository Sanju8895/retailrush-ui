import { Component, inject, OnInit } from '@angular/core';
import { angularModules } from '../../common/modules/angular/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../common/modules/angular-material/angular-material';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [angularModules,AngularMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm:any;

  constructor( private _fb: FormBuilder){}

  ngOnInit(): void {
     this.loginForm = this._fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      remember_password: new FormControl(true)
     })
  }
}
