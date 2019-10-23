import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { HttpnoteService } from 'src/app/service/httpnoteservice/httpnote.service';

@Component({
  selector: 'app-labeldialog',
  templateUrl: './labeldialog.component.html',
  styleUrls: ['./labeldialog.component.scss']
})
export class LabeldialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private route: Router,private httpservice: HttpnoteService) { }

  ngOnInit() {
  }

}
