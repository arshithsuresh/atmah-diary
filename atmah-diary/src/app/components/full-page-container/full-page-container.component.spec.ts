import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageContainerComponent } from './full-page-container.component';

describe('FullPageContainerComponent', () => {
  let component: FullPageContainerComponent;
  let fixture: ComponentFixture<FullPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPageContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
