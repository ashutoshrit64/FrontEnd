import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public color_set : any;
  trashNotes:any[];
  constructor(private route: Router,private httpservice: HttpnoteService) { }

  ngOnInit() {
    this.httpservice.getRequest("/alltrash?token="+localStorage.getItem('token')).subscribe(Response=>{
      this.trashNotes=Response;
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
  }


  restore(item){
  
    this.httpservice.putRequest("/trash?token="+localStorage.getItem('token')+"&id="+item.id,null).subscribe(Response=>{
      console.log(Response);
      this.ngOnInit();
    })
   
  }
delete(item){
// /delete?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4fQ.5uS_12ojssnM-Un_yFhSFoFANHRyGXShw14-hQEILvY&id=10


this.httpservice.deleteRequest("/delete?token="+localStorage.getItem('token')+"&id="+item.id).subscribe(Response=>{
  console.log(Response);
  this.ngOnInit();})



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
