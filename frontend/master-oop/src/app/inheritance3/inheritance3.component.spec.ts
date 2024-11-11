import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance3Component } from './inheritance3.component';

describe('Inheritance3Component', () => {
  let component: Inheritance3Component;
  let fixture: ComponentFixture<Inheritance3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inheritance3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
