import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'we-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() bgColor;
  // @HostBinding('style.backgroundColor') backgroundColor: string = "#f3f3f3";  

}