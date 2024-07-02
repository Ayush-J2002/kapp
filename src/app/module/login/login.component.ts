import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { User } from '../../Class/User/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router : Router, private userService : UserService) {}
user:User=new User();
 onSubmit(form:NgForm){
  this.userService.loginUser(this.user).subscribe(
    data=>{
    if(this.user.email==='super@gmail.com' && this.user.password==='123'){
      this.router.navigate(['/admin-home']);
    }
    else{
      alert("Login Successfull");
      this.router.navigate(['/home']);
    }
    this.user=data;
    this.userService.setUser(this.user);
    this.userService.setLoggedIn(true);
  },

  error=>{
alert("UserName or Password is invalid");
  }
  )
  

 };

}
