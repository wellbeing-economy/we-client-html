import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: '', loadChildren: './modules/feed/feed.module#FeedModule' },
  { path: 'feed', loadChildren: './modules/feed/feed.module#FeedModule' },
  { path: 'posts', loadChildren: './modules/post/post.module#PostModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
