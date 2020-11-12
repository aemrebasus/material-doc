import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AeDocComponent } from 'projects/ae-doc/src/public-api';

const routes: Routes = [
  { path: '', component: AeDocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
