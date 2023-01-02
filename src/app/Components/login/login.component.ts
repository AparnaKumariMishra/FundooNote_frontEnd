import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! :FormGroup;
  submitted =false;
  constructor(private formBuilder : FormBuilder,private user:UserService,private route:Router){}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  onsubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      let reqData={
       email : this.loginForm.value.email,
       password:this.loginForm.value.password
      }
      this.user.login( reqData).subscribe((Response:any)=>{
        console.log(Response);
        localStorage.setItem("token",Response.data);
      })
    }
  }

}
