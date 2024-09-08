import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayButtonComponent } from './replay-button.component';

describe('ReplayButtonComponent', () => {
  let component: ReplayButtonComponent;
  let fixture: ComponentFixture<ReplayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplayButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
