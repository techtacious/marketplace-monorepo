import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySectionComponent } from './category-section.component';

describe('CategorySectionComponent', () => {
  let component: CategorySectionComponent;
  let fixture: ComponentFixture<CategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
