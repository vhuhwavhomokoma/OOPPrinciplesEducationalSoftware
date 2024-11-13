import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismGame3Component } from './polymorphism-game3.component';

describe('PolymorphismGame3Component', () => {
  let component: PolymorphismGame3Component;
  let fixture: ComponentFixture<PolymorphismGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismGame3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
