import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { StrategyShellComponent } from './containers/strategy-shell/strategy-shell.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    StrategyShellComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule
  ]
})
export class StrategyModule { }
