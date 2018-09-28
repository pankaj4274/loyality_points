import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import{FormsModule,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import{MatInputModule} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-classrange',
  templateUrl: './classrange.component.html',
  styleUrls: ['./classrange.component.css']
})
export class ClassrangeComponent  {

  constructor(public snackBar: MatSnackBar) { 
   
  }
  openSnackBar() {
    this.snackBar.open("Saved Successfully", "X", {
      duration: 2000,
    });

}
}
