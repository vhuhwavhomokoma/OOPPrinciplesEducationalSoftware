import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesOnlineGame1Component } from './classes-online-game1.component';

describe('ClassesOnlineGame1Component', () => {
  let component: ClassesOnlineGame1Component;
  let fixture: ComponentFixture<ClassesOnlineGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesOnlineGame1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesOnlineGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
