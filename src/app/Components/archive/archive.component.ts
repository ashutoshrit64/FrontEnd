import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  public color_set : any;
  archiveNotes:any[];
  dialog: any;
  constructor(private route: Router,private httpservice: HttpnoteService) { }

  ngOnInit() {
    this.httpservice.getRequest("/allarchieve?token="+localStorage.getItem('token')).subscribe(Response=>{
this.archiveNotes=Response
console.log(Response);

    })
    this.color_set = [
      {color:'red'},
      {color:'yellow'},
      {color:'blue'},
      {color:'green'},
      {color:'purple'},
      {color:'pink'},
      {color:'brown'},
      {color:'gray'},
      {color:'darkblue'},
      {color:'teal'},
      {color:'orange'},
      {color:'white'} 
    ]

     console.log(this.color_set)
    
  }

  editnote(item : any){
    const dialogRef =this.dialog.open(DialogComponent, 
      {
        data: {
            title:item.title,description:item.description,id:item.id
        }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      data:{

      }
    });
  
    console.log("touched");
  }


  archieve(item)
  {
    console.log("archieve");
    this.httpservice.putRequest("/archieve?token="+localStorage.getItem('token')+"&id="+item.id,null).subscribe(Response=>{
    console.log(Response);
    this.ngOnInit();
    })
   
  }


  delete(item:any){

    this.httpservice.putRequest("/trash?token="+localStorage.getItem('token')+"&id="+item.id,null).subscribe(Response=>{
      console.log(Response);
      this.ngOnInit();
    })

  }

  get_color(){
    
     
    
    }

     changecolor(color:String,id: String){

      console.log("color==>"+color+"|| id==>"+id);
      console.log();
      this.httpservice.putRequest("/notecolor?token="+localStorage.getItem('token')+"&id="+id+"&color="+color,null).subscribe(Response=>{
        console.log(Response);
        console.log("---->");
        
        this.ngOnInit();
      })
  
    }


}
