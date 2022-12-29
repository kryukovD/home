import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeatureListComponent } from './all-feature-list.component';

describe('AllFeatureListComponent', () => {
  let component: AllFeatureListComponent;
  let fixture: ComponentFixture<AllFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFeatureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
