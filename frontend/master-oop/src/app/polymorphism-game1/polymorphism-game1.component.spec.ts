import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismGame1Component } from './polymorphism-game1.component';

describe('PolymorphismGame1Component', () => {
  let component: PolymorphismGame1Component;
  let fixture: ComponentFixture<PolymorphismGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismGame1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
