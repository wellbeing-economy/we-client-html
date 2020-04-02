import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';

import { FeedComponent } from './components/feed/feed.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FeedEventsComponent } from './components/feed-events/feed-events.component';
import { FeedEventComponent } from './components/feed-event/feed-event.component';
import { FeedToolbarComponent } from './components/feed-toolbar/feed-toolbar.component';
import { FeedEventInfoComponent } from './components/feed-event-info/feed-event-info.component';

@NgModule({
  declarations: [
    FeedComponent,
    FeedEventsComponent,
    FeedEventComponent,
    FeedToolbarComponent,
    FeedEventInfoComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
