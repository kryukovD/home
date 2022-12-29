import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorksListComponent } from './all-works-list.component';

describe('AllWorksListComponent', () => {
  let component: AllWorksListComponent;
  let fixture: ComponentFixture<AllWorksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWorksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
