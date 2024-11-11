import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismActivityOneComponent } from './polymorphism-activity-one.component';

describe('PolymorphismActivityOneComponent', () => {
  let component: PolymorphismActivityOneComponent;
  let fixture: ComponentFixture<PolymorphismActivityOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismActivityOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismActivityOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
