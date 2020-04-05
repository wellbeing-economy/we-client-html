import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarSectionComponent } from './components/toolbar-section/toolbar-section.component';
import { ToolbarButtonComponent } from './components/toolbar-button/toolbar-button.component';

@NgModule({
  declarations: [ToolbarComponent, ToolbarSectionComponent, ToolbarButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    ToolbarSectionComponent,
    ToolbarButtonComponent
  ]
})
export class SharedModule { }
