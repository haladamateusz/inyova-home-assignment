import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyShellComponent } from "./containers/strategy-shell/strategy-shell.component";

const routes: Routes = [
  { path: '', component: StrategyShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule { }
