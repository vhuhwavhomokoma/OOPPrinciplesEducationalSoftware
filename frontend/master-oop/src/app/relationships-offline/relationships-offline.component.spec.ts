import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsOfflineComponent } from './relationships-offline.component';

describe('RelationshipsOfflineComponent', () => {
  let component: RelationshipsOfflineComponent;
  let fixture: ComponentFixture<RelationshipsOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipsOfflineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipsOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
