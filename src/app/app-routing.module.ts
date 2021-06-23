import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from "./hello/hello.component";

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full'},
  { path: 'hello', component: HelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
