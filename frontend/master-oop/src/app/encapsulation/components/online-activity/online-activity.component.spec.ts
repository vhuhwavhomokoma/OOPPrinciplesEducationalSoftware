import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineActivityComponent } from './online-activity.component';

describe('OnlineActivityComponent', () => {
  let component: OnlineActivityComponent;
  let fixture: ComponentFixture<OnlineActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
