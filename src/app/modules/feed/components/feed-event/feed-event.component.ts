import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'we-feed-event',
  templateUrl: './feed-event.component.html',
  styleUrls: ['./feed-event.component.scss']
})
export class FeedEventComponent {

  @Input() image;
  @Input() type;
  @Input() heading;
  @Input() text;
  
}
