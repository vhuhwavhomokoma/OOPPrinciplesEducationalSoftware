import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance2Component } from './inheritance2.component';

describe('Inheritance2Component', () => {
  let component: Inheritance2Component;
  let fixture: ComponentFixture<Inheritance2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inheritance2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
