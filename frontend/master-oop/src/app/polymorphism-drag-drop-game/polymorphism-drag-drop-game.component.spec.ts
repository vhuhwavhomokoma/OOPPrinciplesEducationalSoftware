import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismDragDropGameComponent } from './polymorphism-drag-drop-game.component';

describe('PolymorphismDragDropGameComponent', () => {
  let component: PolymorphismDragDropGameComponent;
  let fixture: ComponentFixture<PolymorphismDragDropGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolymorphismDragDropGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismDragDropGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
