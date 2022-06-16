import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsViewComponent } from './all-projects-view.component';

describe('AllProjectsViewComponentComponent', () => {
  let component: AllProjectsViewComponent;
  let fixture: ComponentFixture<AllProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProjectsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
