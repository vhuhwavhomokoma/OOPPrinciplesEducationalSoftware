import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismActivityTwoComponent } from './polymorphism-activity-two.component';

describe('PolymorphismActivityTwoComponent', () => {
  let component: PolymorphismActivityTwoComponent;
  let fixture: ComponentFixture<PolymorphismActivityTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismActivityTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismActivityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
