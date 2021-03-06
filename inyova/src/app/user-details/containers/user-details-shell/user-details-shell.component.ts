import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { loadData, updateData } from "../../../store/actions";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-details-shell',
  templateUrl: './user-details-shell.component.html',
  styleUrls: ['./user-details-shell.component.scss']
})
export class UserDetailsShellComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.prepareForm();
    this.loadInitialData();
  }

  prepareForm(): void {
    this.form = new FormGroup({
      gender: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      day: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      nationality: new FormControl(''),
    })
  }

  loadInitialData(): void {
    const data = localStorage.getItem('form') ?? '';
    if (data) {
      this.form.patchValue(JSON.parse(data));
      this.store.dispatch(loadData(this.form.getRawValue()));
    }
  }

  saveForm(): void {
    const invalidField = Object.values(this.form.controls).find(control => !control.value);
    if (invalidField) {
      this.snackBar.open('Some fields are missing', '', {
          duration: 1000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: 'info'
        }
      )
    } else {
      this.store.dispatch(updateData(this.form.getRawValue()));
    }
  }

}
