import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExampleComponent } from './event-example.component';

describe('EventExampleComponent', () => {
  let component: EventExampleComponent;
  let fixture: ComponentFixture<EventExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
