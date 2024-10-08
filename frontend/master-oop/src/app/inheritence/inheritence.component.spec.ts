import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritenceComponent } from './inheritence.component';

describe('InheritenceComponent', () => {
  let component: InheritenceComponent;
  let fixture: ComponentFixture<InheritenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
