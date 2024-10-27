import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhertitanceActivity2Component } from './inhertitance-activity2.component';

describe('InhertitanceActivity2Component', () => {
  let component: InhertitanceActivity2Component;
  let fixture: ComponentFixture<InhertitanceActivity2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InhertitanceActivity2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhertitanceActivity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
