import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

const routes: Routes = [
  { path: '', component: PostsPageComponent },  
  { path: 'add', component: AddPageComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
