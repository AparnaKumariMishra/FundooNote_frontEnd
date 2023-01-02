import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit{

  resetForm! :FormGroup;
  submitted =false;
  constructor(private formBuilder : FormBuilder,private user:UserService,private route:Router){}


  ngOnInit(): void  {

    this.resetForm = this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]]

    })
  }
  onsubmit(){
    this.submitted = true;
    if(this.resetForm.valid){
      let reqData={
       password:this.resetForm.value.password
       //confirmPassword:this.resetForm.value.confirmPassword
      }
      this.user.resetpassword( reqData).subscribe((Response:any)=>{
        console.log(Response);
        localStorage.setItem("token",Response.data);
      })
    }


}
}
