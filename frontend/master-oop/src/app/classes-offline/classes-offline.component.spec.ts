import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesOfflineComponent } from './classes-offline.component';

describe('ClassesOfflineComponent', () => {
  let component: ClassesOfflineComponent;
  let fixture: ComponentFixture<ClassesOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesOfflineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
