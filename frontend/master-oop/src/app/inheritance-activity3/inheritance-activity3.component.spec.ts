import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceActivity3Component } from './inheritance-activity3.component';

describe('InheritanceActivity3Component', () => {
  let component: InheritanceActivity3Component;
  let fixture: ComponentFixture<InheritanceActivity3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceActivity3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceActivity3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
