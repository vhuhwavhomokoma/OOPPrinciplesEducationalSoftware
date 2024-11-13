import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesOnlineGame3Component } from './classes-online-game3.component';

describe('ClassesOnlineGame3Component', () => {
  let component: ClassesOnlineGame3Component;
  let fixture: ComponentFixture<ClassesOnlineGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesOnlineGame3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesOnlineGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
