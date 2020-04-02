import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEventInfoComponent } from './feed-event-info.component';

describe('FeedEventInfoComponent', () => {
  let component: FeedEventInfoComponent;
  let fixture: ComponentFixture<FeedEventInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedEventInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
