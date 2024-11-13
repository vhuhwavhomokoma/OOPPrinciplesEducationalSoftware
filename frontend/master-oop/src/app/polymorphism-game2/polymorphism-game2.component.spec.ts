import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismGame2Component } from './polymorphism-game2.component';

describe('PolymorphismGame2Component', () => {
  let component: PolymorphismGame2Component;
  let fixture: ComponentFixture<PolymorphismGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismGame2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
