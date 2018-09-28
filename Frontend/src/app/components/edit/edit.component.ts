import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import{FormsModule,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import{MatInputModule} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import{MatButtonModule} from '@angular/material';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

 
  constructor(public snackBar: MatSnackBar) { }
  openSnackBar() {
    this.snackBar.open("Saved Successfully", "X", {
      duration: 2000,
    });
  }

}
