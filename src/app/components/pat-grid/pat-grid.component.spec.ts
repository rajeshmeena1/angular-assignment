import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatGridComponent } from './pat-grid.component';

describe('PatGridComponent', () => {
  let component: PatGridComponent;
  let fixture: ComponentFixture<PatGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
