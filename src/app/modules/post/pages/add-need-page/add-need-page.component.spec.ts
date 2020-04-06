import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedPageComponent } from './add-need-page.component';

describe('AddNeedPageComponent', () => {
  let component: AddNeedPageComponent;
  let fixture: ComponentFixture<AddNeedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
