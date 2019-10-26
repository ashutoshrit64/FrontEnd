import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';
import { LabeldialogComponent } from '../labeldialog/labeldialog.component';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/httpService/http.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public imagePath;
  imgURL: any;
  imgPath:any;
  public message: string;
  alllabel: any[];
  emailid: any;
  fname: any;
  dialog: any;
  token:any
  public Search: any[];
  public Show_search = true;
  labname = new FormControl("");
  query = new FormControl("");
  labelDto = {
  }
  searchdto = {

  }

  constructor(private route: Router, private httpservice: HttpnoteService, private httpuserservice: HttpService) { }

  ngOnInit() {
   
    this.fname = localStorage.getItem('fname');
    this.emailid = localStorage.getItem('emailid');
   this.get_all_label();
  this.token=localStorage.getItem('token');

  }

get_all_label(){
  this.httpservice.getRequest("/getalllabel?token=" + localStorage.getItem('token')).subscribe(Response => {
    console.log("----------------------------");

    console.log(Response);


    console.log("-------------------------------------------");

    this.alllabel = Response
  })

}
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');

    localStorage.removeItem('emailid');

    this.route.navigate(['login']);


  }

  show_note() {
    localStorage.getItem('token');
    console.log(localStorage.getItem('token'));

    console.log("Notes");
    console.log("All notes");



  }

  labelbox(): void {
    const dialogRef = this.dialog.open(LabeldialogComponent, {
      width: '250px',
      data: {}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
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

  delete(label) {
    this.httpservice.deleteRequest("/deletelabel?token=" + localStorage.getItem('token') + "&labelid=" + label.id).subscribe(Response => {
      console.log(Response);
      this.ngOnInit();
    })
  }

  editlabe(label) {
    this.labelDto = {
      label: this.labname.value
    }
    this.httpservice.putRequest("/updatelabel?token=" + localStorage.getItem('token') + "&labelid=" + label.id, this.labelDto).subscribe(Response => {
      console.log(Response);
      this.ngOnInit();
    })
  }



  values = '';

  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.httpservice.getRequest("/searchnotes?token=" + localStorage.getItem('token') + "&query=" + this.values).subscribe(Response => {
      console.log(Response);

      this.Search = Response;
      this.ngOnInit();

    })
  }

  showsearch() {
    this.Show_search = !this.Show_search;
  }







  preview(files) {
    console.log(files);

    let form = new FormData();
    form.append('File', files.target.files[0]);
    this.setprofile(form);
  }
  setprofile(file) {
    this.httpuserservice.imageRequest("uploadImage/" + localStorage.getItem('token'), file).subscribe(Response => {
      console.log("Response from backend",Response);
 
    })

  }
}







