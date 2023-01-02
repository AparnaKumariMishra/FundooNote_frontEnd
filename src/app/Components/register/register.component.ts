import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform! :FormGroup;
  submitted =false;
  constructor(private formBuilder : FormBuilder,private user:UserService,private route:Router){}

  ngOnInit():void{
    this.registerform = this.formBuilder.group({
      firstName :['',Validators.required],
      lastName :['',Validators.required],
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]]

    })
  }
  onsubmit(){
    this.submitted = true;
    if(this.registerform.valid){
      let reqData={
       firstName : this.registerform.value.firstName,
       lastName:this.registerform.value.lastName,
       email:this.registerform.value.email,
       password:this.registerform.value.password
      }
      this.user.register( reqData).subscribe((Response:any)=>{
        console.log(Response);
        localStorage.setItem("token",Response.data);
      })
    }

}
}