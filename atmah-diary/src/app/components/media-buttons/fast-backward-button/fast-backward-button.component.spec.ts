import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastBackwardButtonComponent } from './fast-backward-button.component';

describe('FastBackwardButtonComponent', () => {
  let component: FastBackwardButtonComponent;
  let fixture: ComponentFixture<FastBackwardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FastBackwardButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastBackwardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
