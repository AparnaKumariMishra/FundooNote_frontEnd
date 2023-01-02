import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private httpService:HttpService) { }
  login(reqData:any)
  {
    let header ={
      Headers:new HttpHeaders({
      'content-type':'application/JSON',
    })
  }
  return this.httpService.postService('/User/UserLogin',reqData,false,header)
}

  register(reqData:any)
  {
    let header ={
      Headers:new HttpHeaders({
      'content-type':'application/JSON',
    })
  }
  return this.httpService.postService('/User/UserRegister',reqData,false,header)
}

forgotpassword(reqData:any)
{
  let header ={
    headers:new HttpHeaders({
    'Content-Type':'Application/json'
  })
}
return this.httpService.postService('/User/ ForgotPassword?email='+reqData.email,{},false,header)
}

resetpassword(reqData:any)
{
  let header ={
    Headers:new HttpHeaders({
    'content-type':'application/JSON',
  })
}
return this.httpService.postService('/User/resetPassword',reqData,false,header)
}

}
