import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'we-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss']
})
export class ToolbarButtonComponent {

  @Input() icon;
  @Input() bgColor;
  @Input() link;

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";  

  ngOnInit() {
    if (this.bgColor) this.backgroundColor = this.bgColor;    
  }
}
