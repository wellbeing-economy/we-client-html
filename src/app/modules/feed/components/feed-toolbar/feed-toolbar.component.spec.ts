import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedToolbarComponent } from './feed-toolbar.component';

describe('FeedToolbarComponent', () => {
  let component: FeedToolbarComponent;
  let fixture: ComponentFixture<FeedToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
