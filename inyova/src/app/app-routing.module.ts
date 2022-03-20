import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'strategy', loadChildren: () => import('./strategy/strategy.module').then(m => m.StrategyModule)},
  { path: 'next-steps', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)},
  {path: '**', redirectTo: 'strategy'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
