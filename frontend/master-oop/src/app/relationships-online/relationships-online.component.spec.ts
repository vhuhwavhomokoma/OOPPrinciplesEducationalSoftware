import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsOnlineComponent } from './relationships-online.component';

describe('RelationshipsOnlineComponent', () => {
  let component: RelationshipsOnlineComponent;
  let fixture: ComponentFixture<RelationshipsOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipsOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipsOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
