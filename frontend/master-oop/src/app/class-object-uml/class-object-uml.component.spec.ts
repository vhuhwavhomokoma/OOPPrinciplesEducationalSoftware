import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassObjectUmlComponent } from './class-object-uml.component';

describe('ClassObjectUmlComponent', () => {
  let component: ClassObjectUmlComponent;
  let fixture: ComponentFixture<ClassObjectUmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassObjectUmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassObjectUmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
