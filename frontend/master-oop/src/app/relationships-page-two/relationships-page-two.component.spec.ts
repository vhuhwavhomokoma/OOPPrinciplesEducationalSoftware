import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsPageTwoComponent } from './relationships-page-two.component';

describe('RelationshipsPageTwoComponent', () => {
  let component: RelationshipsPageTwoComponent;
  let fixture: ComponentFixture<RelationshipsPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipsPageTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipsPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
