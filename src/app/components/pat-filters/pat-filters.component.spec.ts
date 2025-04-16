import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatFiltersComponent } from './pat-filters.component';

describe('PatFiltersComponent', () => {
  let component: PatFiltersComponent;
  let fixture: ComponentFixture<PatFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
