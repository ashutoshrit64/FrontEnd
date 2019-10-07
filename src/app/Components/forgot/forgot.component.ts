import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../../src/app/service/httpService/http.service'
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



const httpOptions: any = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'all',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {


  email = new FormControl('',Validators.pattern("^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$"));
  forgot = {};
  constructor(private httpservice: HttpService, private routes: Router) { }

  ngOnInit() {
  }
  forgotlink() {
    console.log(this.email);
    this.forgot={
      emailid:this.email.value
    }
    this.httpservice.postRequest('forgot',this.forgot).subscribe(Response=>{
      console.log(Response);
      console.log(Response.token);
      localStorage.setItem('token',Response.token);
      console.log('link sent succesfully');
      
      
    })
  }
}
