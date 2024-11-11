import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhertitanceActivity1Component } from './inhertitance-activity1.component';

describe('InhertitanceActivity1Component', () => {
  let component: InhertitanceActivity1Component;
  let fixture: ComponentFixture<InhertitanceActivity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InhertitanceActivity1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhertitanceActivity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
