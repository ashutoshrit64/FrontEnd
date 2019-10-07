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
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

 


  password :String
   
 
  constructor(private httpservice: HttpService, private routes: Router) { }

  ngOnInit() {
  }
  setpassword(){

    
    console.log(this.password);
    

this.httpservice.postRequest("reset/"+localStorage.getItem('token')+"?password="+this.password,null).subscribe(Response=>
  {
    console.log(Response);
    console.log('password set  succesfully......');
    console.log();
    
    
  }) 

  }
}
