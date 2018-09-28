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
  formFlag=false;
 
  btnText='edit';
 
  constructor(public snackBar: MatSnackBar) { }
  openSnackBar() {
    this.formFlag=!this.formFlag;
    this.btnText=this.formFlag?'edit':'save';
    if(this.formFlag==true){
    this.snackBar.open("Saved Successfully", "X", {
      duration: 2000,
    });
  }
  }

}
