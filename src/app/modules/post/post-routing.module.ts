import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './pages/add-page/add-page.component';

const routes: Routes = [
  { path: 'add', component: AddPageComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
