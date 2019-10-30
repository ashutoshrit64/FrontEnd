import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  title: any;
  labelName: any;
  label = new FormControl("");
  description: any;
  allnotes: any[];
  alllabel: any[];
  toggle: boolean = false;
  Title = new FormControl("", Validators.required);
  Description = new FormControl("", Validators.required);
  date:any=new Date();
  labelDto = {

  }
  note = {
  };
  public color_set: any;


  pinnedArray = [];



  constructor(
    private route: Router,
    private httpservice: HttpnoteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.get_all_notes()

    this.httpservice.getRequest("/getalllabel?token=" + localStorage.getItem('token')).subscribe(Response => {
      console.log("----------------------------");

      console.log(Response);
      console.log(Response.labelName);

      console.log("-------------------------------------------");

      this.alllabel = Response
    })


    this.color_set = [
      { color: 'red' },
      { color: 'yellow' },
      { color: 'blue' },
      { color: 'green' },
      { color: 'purple' },
      { color: 'pink' },
      { color: 'brown' },
      { color: 'gray' },
      { color: 'darkblue' },
      { color: 'teal' },
      { color: 'orange' },
      { color: 'white' }
    ]

    console.log(this.color_set)

  }

  // open for model box
  cardOpen() {
    this.toggle = !this.toggle;
    console.log("hey", this.toggle);
  }



  //Create notes
  createNotes() {
    this.toggle = !this.toggle;
    console.log("hey", this.toggle);
    console.log(this.Title.value);

    this.note = { title: this.Title.value, description: this.Description.value };
    console.log("note-->", this.note);
    console.log("title-->" + this.Title);
    if (this.note['title'] != '' && this.note['description'] != '' || this.note['title'] == '' && this.note['description'] != '' || this.note['title'] != '' && this.note['description'] == '') {
      this.httpservice.postRequest("/createnote?token=" + localStorage.getItem('token'), this.note).subscribe(Response => {

        console.log(Response);
        if (Response.statusCode == 200) {
          this.snackBar.open(Response.statusMessage, 'Undo', {
            duration: 3000
          });
        }
        this.ngOnInit()
      });

    } else {
      console.log("null");
    }
  }

  //Get all NOtes from Database
  get_all_notes() {
    this.httpservice.getRequest("/allnotes?token=" + localStorage.getItem('token')).subscribe(Response => {

      this.allnotes = Response;
      console.log(this.allnotes);
      Response.forEach(element => {
        if (element.pin === true) {
          this.pinnedArray.push(element);
        }
      });

      console.log("All notes");

    })


  }

  //Notes will be updated
  editnote(item: any) {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        panelClass: 'myClass',
        data: {
          title: item.title,
          description: item.description,
          id: item.id,
          color: item.color,
          archieve: item.archieve,
          pin: item.pin
        }

      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      data: {
        this.title = result,
          this.description = result

      }
      this.ngOnInit();
    });

    console.log("touched");
  }

  delete(item: any) {

    this.httpservice.putRequest("/trash?token=" + localStorage.getItem('token') + "&id=" + item.id, null).subscribe(Response => {
      console.log(Response);
      this.ngOnInit();
    })

  }
  archieve(item: any) {
    console.log("archieve");
    this.httpservice.putRequest("/archieve?token=" + localStorage.getItem('token') + "&id=" + item.id, null).subscribe(Response => {
      console.log(Response);
      this.ngOnInit();
    })

  }



  changecolor(color: String, id: String) {

    console.log("color==>" + color + "|| id==>" + id);
    console.log();
    this.httpservice.putRequest("/notecolor?token=" + localStorage.getItem('token') + "&id=" + id + "&color=" + color, null).subscribe(Response => {
      console.log(Response);
      console.log("---->");

      this.ngOnInit();
    })

  }

  addnotetolabel(noteid, labelid, labelname) {
    this.labelName = labelname;
    this.httpservice.putRequest("/noteaslabel?token=" + localStorage.getItem('token') + "&noteId=" + noteid + "&labelId=" + labelid, null).subscribe(Response => {
      console.log(Response);

      this.ngOnInit();
    })
    // /noteaslabel?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4fQ.5uS_12ojssnM-Un_yFhSFoFANHRyGXShw14-hQEILvY&noteId=2&labelId=16
  }

  pin(noteid) {
    this.httpservice.putRequest("/pin?token=" + localStorage.getItem('token') + "&id=" + noteid, null).subscribe(Response => {
      console.log(Response);
      this.ngOnInit();
    })
    // pin?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4fQ.5uS_12ojssnM-Un_yFhSFoFANHRyGXShw14-hQEILvY&id=2
  }

  onEvent(event) {
    event.stopPropagation();
  }

  addlabe(labeldata) {
    console.log("hghmghjghjghjghjg", labeldata);


    this.labelDto = {
      label: labeldata
    }
    if (this.labelDto != null) {
      console.log("-------------------------");

      this.httpservice.postRequest("/createlabel?token=" + localStorage.getItem('token'), this.labelDto).subscribe(Response => {
        console.log(Response);
        this.ngOnInit();

      })

    }
  }

settoday(data){
  console.log(data.id);
  const date = new Date().toDateString();
  let reminderDate = date +' 08:00:00';
  console.log(reminderDate);
  this.httpservice.putRequest("/setreminder?token="+localStorage.getItem('token')+"&noteId="+data.id+"&time="+reminderDate,null).subscribe(Response=>{
    console.log(Response);
    
  })
}

settomorrow(data)
{
  console.log(this.date);
  
  this.date.setDate(this.date.getDate() + 1);
  console.log(this.date);
  let reminderDate=this.date+'08:00:00'
  this.httpservice.putRequest("/setreminder?token="+localStorage.getItem('token')+"&noteId="+data.id+"&time="+reminderDate,null).subscribe(Response=>{
    console.log(Response);
    
  })
  
}
setweekly(data){
  console.log(this.date);
  
  this.date.setDate(this.date.getDate() + 7);
  console.log(this.date);
  let reminderDate=this.date+'08:00:00'
  this.httpservice.putRequest("/setreminder?token="+localStorage.getItem('token')+"&noteId="+data.id+"&time="+reminderDate,null).subscribe(Response=>{
    console.log(Response);
    
  })
}


}




