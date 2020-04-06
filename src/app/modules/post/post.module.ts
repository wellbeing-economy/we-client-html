import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { PostComponent } from './components/post/post.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostsComponent } from './components/posts/posts.component';
import { MatButtonModule } from '@angular/material/button';
import { AddNeedPageComponent } from './pages/add-need-page/add-need-page.component';

@NgModule({
  declarations: [
    PostsPageComponent,
    AddPageComponent,
    PostComponent,
    PostInfoComponent,
    PostsComponent,
    AddNeedPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule,
    MatButtonModule
  ]
})
export class PostModule { }
