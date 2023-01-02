import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  implements OnInit {
  forgotForm! :FormGroup;
  submitted =false;
  constructor(private formBuilder : FormBuilder,private user:UserService,private route:Router){}

  ngOnInit():void{
    this.forgotForm = this.formBuilder.group({
      email :['',[Validators.required,Validators.email]]
    })
  }
  onsubmit(){
    this.submitted = true;
    if(this.forgotForm.valid){
      let reqData={
       email : this.forgotForm.value.email
      }
      this.user.forgotpassword( reqData).subscribe((Response:any)=>{
        console.log(Response);
        localStorage.setItem("token",Response.data);
      })
    }
  }

  }


