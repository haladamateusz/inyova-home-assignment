import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';


@NgModule({
  declarations: [
    UserDetailsShellComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
