import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentMapperComponent } from './intent-mapper.component';

describe('IntentMapperComponent', () => {
  let component: IntentMapperComponent;
  let fixture: ComponentFixture<IntentMapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentMapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
