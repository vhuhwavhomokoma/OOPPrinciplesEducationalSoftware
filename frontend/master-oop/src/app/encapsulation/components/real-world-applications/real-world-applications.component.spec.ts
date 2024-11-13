import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealWorldApplicationsComponent } from './real-world-applications.component';

describe('RealWorldApplicationsComponent', () => {
  let component: RealWorldApplicationsComponent;
  let fixture: ComponentFixture<RealWorldApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealWorldApplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealWorldApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
