import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { FeatureKey, reducer } from "../store/reducer";
import { StoreModule } from "@ngrx/store";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    UserDetailsShellComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FeatureKey, reducer),
  ]
})
export class UserDetailsModule {
}
