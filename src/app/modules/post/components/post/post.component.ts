import { Component, Input } from '@angular/core';

@Component({
  selector: 'we-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() image;
  @Input() type;
  @Input() heading;
  @Input() text;  
}