import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.scss']
})
export class AllnotesComponent implements OnInit {

  
  title:any;
  description:any;
  allnotes: any[];
  constructor(private route: Router,private httpservice: HttpnoteService,public dialog: MatDialog) { }

  ngOnInit() {
    this.httpservice.getRequest("/allnotes?token="+localStorage.getItem('token')).subscribe(Response=>
      {
        
        this.allnotes=Response;
        console.log(this.allnotes);
        console.log("All notes");
        console.log();
        
        console.log();
      }) 
  }

editnote(item){

  
  
  this.dialog.open(DialogComponent, {
    data: {
title:item.title,description:item.description,id:item.id
      
    }
  });
  console.log("touched");
}


}
