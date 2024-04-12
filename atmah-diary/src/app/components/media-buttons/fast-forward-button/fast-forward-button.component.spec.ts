import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastForwardButtonComponent } from './fast-forward-button.component';

describe('FastForwardButtonComponent', () => {
  let component: FastForwardButtonComponent;
  let fixture: ComponentFixture<FastForwardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FastForwardButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastForwardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
