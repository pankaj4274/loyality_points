import { Component, OnInit } from '@angular/core';
import{MatInputModule} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import{MatButtonModule} from '@angular/material';
import{MatCardModule} from '@angular/material/card';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-pointvalue',
  templateUrl: './pointvalue.component.html',
  styleUrls: ['./pointvalue.component.css']
})
export class PointvalueComponent {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open("Saved Successfully", "X", {
      duration: 2000,
    });
  }
} 
