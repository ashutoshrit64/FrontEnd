import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../../src/app/service/httpService/http.service'
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


const httpOptions: any = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'all',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',


  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  toogle: boolean = false;
  emailid = new FormControl('', Validators.pattern("^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$"));
  Password = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(2), Validators.nullValidator]);
  loginuser = {};



  constructor(private httpservice: HttpService, private route: Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  login() {
    this.toogle = true;
    console.log(this.loginuser);
    this.loginuser = {
      emailid: this.emailid.value,
      password: this.Password.value
    }
    this.httpservice.postRequest('login', this.loginuser).subscribe(response => {
       localStorage.setItem('fname',response.firstName);
       localStorage.setItem('lname',response.lName);
       localStorage.setItem('emailid',response.email);
      localStorage.setItem('token',response.token);
      console.log("status code-->"+response.statusCode);
      if(response.statusCode==200)
      {
        // this.snackBar.open(response.statusMessage);
        this.snackBar.open(response.statusMessage, 'Undo', {
          duration: 3000
        });
      this.route.navigate(['dashboard/notes']);
      console.log(response);
      }
      else{
        console.log(response.statusMessage);
        this.snackBar.open(response.statusMessage, 'User present last time'+response.token, {
          duration: 3000
        });

        this.route.navigate(['login']);
      }


    })
  }
  register() {

    this.route.navigate(['registration']);

  }
  forgot() {
    this.route.navigate(['forgot']);
  }
}
