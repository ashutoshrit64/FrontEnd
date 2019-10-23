import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';
import { FormControl } from '@angular/forms';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<NotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private route: Router,private httpservice: HttpnoteService) { }

title:any=this.data.title;
id:any=this.data.id;
color:any=this.data.color;
archieve:any=this.data.archieve;
pin:boolean=this.data.pin;

Title=new FormControl("");
Description=new FormControl("");
updatenote={

}
description:any=this.data.description;


  ngOnInit() {console.log(this.title);
    this.update();
    console.log(this.data.color);
    
  }


update()
{
  console.log(this.id);
  
  this.updatenote={
    title:this.data.title,
    description:this.data.description
}

console.log(this.updatenote);

this.httpservice.putRequest("/updatenote?token="+localStorage.getItem('token')+"&id="+this.id,this.updatenote).subscribe(Response=>{
console.log(Response);
 

})
 
}


pinned(id){
  this.httpservice.putRequest("/pin?token="+localStorage.getItem('token')+"&id="+id,null).subscribe(Response=>{
    console.log(Response);
    this.ngOnInit();
  })

}

}
