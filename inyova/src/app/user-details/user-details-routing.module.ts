import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsShellComponent } from "./containers/user-details-shell/user-details-shell.component";

const routes: Routes = [
  { path: '', component: UserDetailsShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
