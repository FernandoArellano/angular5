import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserversExampleComponent } from './observers-example.component';

describe('ObserversExampleComponent', () => {
  let component: ObserversExampleComponent;
  let fixture: ComponentFixture<ObserversExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserversExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserversExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
