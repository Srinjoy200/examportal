import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  submitForm(): void{
    if(this.user.username == '')
    {
      alert('Username is required')
      return
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        alert('success!');},
      (error)=>{alert('error!');}


    )
  }
}
