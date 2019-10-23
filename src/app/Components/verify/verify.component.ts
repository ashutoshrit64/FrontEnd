import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../src/app/service/httpService/http.service'
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private httpservice: HttpService, private route: Router) { 

    console.log(localStorage.getItem('token'));
    this.httpservice.postRequest("verify/"+localStorage.getItem('token'),null).subscribe(response=>{
      
      console.log(response);
      })

  }

  ngOnInit() {
  }
  
  verify(){
   
    console.log(localStorage.getItem('token'));
    this.route.navigate(['login']);
    




  }

}
