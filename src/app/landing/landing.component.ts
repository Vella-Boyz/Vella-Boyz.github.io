import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignupComponent } from '../landing/dialogBox/signup/signup.component';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  email: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}


  // Sign up
  openSignUpForm(): void {
    this.dialog.open(SignupComponent, {
      //  width: '327px'
     });
  }

}
