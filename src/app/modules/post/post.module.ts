import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { AddComponent } from './components/add/add.component';
import { AddPageComponent } from './pages/add-page/add-page.component';

@NgModule({
  declarations: [
    AddComponent,
    AddPageComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [
    AddComponent,
    AddPageComponent
  ]
})
export class PostModule { }
