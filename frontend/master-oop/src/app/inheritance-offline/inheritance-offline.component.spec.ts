import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceOfflineComponent } from './inheritance-offline.component';

describe('InheritanceOfflineComponent', () => {
  let component: InheritanceOfflineComponent;
  let fixture: ComponentFixture<InheritanceOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceOfflineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
