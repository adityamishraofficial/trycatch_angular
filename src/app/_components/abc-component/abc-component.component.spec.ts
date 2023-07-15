import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcComponentComponent } from './abc-component.component';

describe('AbcComponentComponent', () => {
  let component: AbcComponentComponent;
  let fixture: ComponentFixture<AbcComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbcComponentComponent]
    });
    fixture = TestBed.createComponent(AbcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
