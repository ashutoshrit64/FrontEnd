import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  title:any;
  labelName:any;
  label=new FormControl("");
  description:any;
  allnotes: any[];
  alllabel:any[];
  remindernotes:any[];
  toggle:boolean=false;
  Title=new FormControl("",Validators.required);
  Description=new FormControl("",Validators.required);
labelDto={

}
  note={
  };
  public color_set : any;
 
  
  constructor(  private route: Router,
    private httpservice: HttpnoteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.get_reminder();
  }

  cardOpen(){
    this.toggle=!this.toggle;
    console.log("hey",this.toggle );
}



all_label(){

  this.httpservice.getRequest("/getalllabel?token="+localStorage.getItem('token')).subscribe(Response=>{
    console.log("----------------------------");
    
    console.log(Response);
    console.log(Response.labelName);
    
    console.log("-------------------------------------------");
    
    this.alllabel=Response
    this.ngOnInit();
  })

}


get_reminder(){
  this.httpservice.getRequest("/getallReminderNote?token="+localStorage.getItem('token')).subscribe(Response=>{
    console.log(Response);
  
    this.remindernotes=Response;
  })
}

delete(data){
  console.log("delete");
  console.log("fdsfds",data.id);
  
  this.httpservice.putRequest("/deletereminder?noteId="+data.id,null).subscribe(Response=>{
    console.log(Response);
    this.ngOnInit();
  })
}
}
