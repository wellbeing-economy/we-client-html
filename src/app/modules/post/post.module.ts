import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { PostComponent } from './components/post/post.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsToolbarComponent } from './components/posts-toolbar/posts-toolbar.component';

@NgModule({
  declarations: [
    PostsPageComponent,
    AddPageComponent,
    PostComponent,
    PostInfoComponent,
    PostsComponent,    
    PostsToolbarComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
