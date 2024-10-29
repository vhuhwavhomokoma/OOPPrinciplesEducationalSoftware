import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesOnlineGame2Component } from './classes-online-game2.component';

describe('ClassesOnlineGame2Component', () => {
  let component: ClassesOnlineGame2Component;
  let fixture: ComponentFixture<ClassesOnlineGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesOnlineGame2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesOnlineGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
