import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismActivityThreeComponent } from './polymorphism-activity-three.component';

describe('PolymorphismActivityThreeComponent', () => {
  let component: PolymorphismActivityThreeComponent;
  let fixture: ComponentFixture<PolymorphismActivityThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismActivityThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismActivityThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
