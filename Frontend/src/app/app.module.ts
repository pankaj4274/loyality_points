import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{MatCardModule} from '@angular/material/card';
import {
  MatFormFieldModule,
     MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
   
    
  } from '@angular/material';
  import {Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ClassrangeComponent } from './components/classrange/classrange.component';
import { EditComponent } from './components/edit/edit.component';
import { PointvalueComponent } from './components/pointvalue/pointvalue.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RedeempointComponent } from './components/redeempoint/redeempoint.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'edit',component:EditComponent},
  {path:'add',component:AddComponent},
  {path:'status',component:ClassrangeComponent},
  {path:'points',component:PointvalueComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    ClassrangeComponent,
    EditComponent,
    PointvalueComponent,
    RedeempointComponent
  ],
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    
   
  ],
  exports: [
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
