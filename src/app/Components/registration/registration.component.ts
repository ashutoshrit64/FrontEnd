import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../../src/app/service/httpService/http.service'
import { HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';


const httpOptions: any = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'all',
    'Access-Control-Allow-Origin': '*'
  })
};
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
 
  fname = new FormControl('', [Validators.minLength(3), Validators.maxLength(20)]);
  lname = new FormControl('', [Validators.minLength(3), Validators.maxLength(20)]);
  emailid = new FormControl('');
  password = new FormControl('', [Validators.minLength(8), Validators.maxLength(20)]);
  dob = new FormControl('', [Validators.required,Validators.maxLength(11),Validators.minLength(9)]);
  phoneno = new FormControl('', [Validators.maxLength(10),Validators.minLength(10)]);
  user = {};
  date1: Date;
  data: any;

  constructor(private httpService: HttpService,private route:Router) {
  }


  ngOnInit() {
  }
  submit() {
    this.httpService.postRequest('register',this.user).subscribe(response=>{
      localStorage.setItem('token',response.token);
console.log(response);


console.log("Data",this.user);

      console.log("Registered Successfully");
      if(response.statusCode==200){
        this.route.navigate(['login']);
      }
      else{
        this.route.navigate(['registration']);
      }
    })


  }
  login(){

    this.route.navigate(['login']);


  }


}
