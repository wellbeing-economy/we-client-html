import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FeedEventsComponent } from './components/feed-events/feed-events.component';
import { FeedEventComponent } from './components/feed-event/feed-event.component';
import { FeedToolbarComponent } from './components/feed-toolbar/feed-toolbar.component';

@NgModule({
  declarations: [
    FeedComponent,
    FeedEventsComponent,
    FeedEventComponent,
    FeedToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
