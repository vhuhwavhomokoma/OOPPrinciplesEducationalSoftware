import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsPageThreeComponent } from './relationships-page-three.component';

describe('RelationshipsPageThreeComponent', () => {
  let component: RelationshipsPageThreeComponent;
  let fixture: ComponentFixture<RelationshipsPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipsPageThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipsPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
