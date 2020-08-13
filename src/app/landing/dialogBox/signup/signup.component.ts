import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})


export class SignupComponent implements OnInit {

  email: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }


  submitForm() {
    if ( !this.emailFormControl.value ){
      return;
    }
      const payLoad = {
        data: {
          email: this.emailFormControl.value
        }
      }
      this.snackBar.open("Thank you!", 'Okay', { duration: 4000 });
      this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
