import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineActivityComponent } from './offline-activity.component';

describe('OfflineActivityComponent', () => {
  let component: OfflineActivityComponent;
  let fixture: ComponentFixture<OfflineActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfflineActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
