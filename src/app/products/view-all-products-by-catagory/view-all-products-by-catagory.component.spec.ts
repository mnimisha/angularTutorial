import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsByCatagoryComponent } from './view-all-products-by-catagory.component';

describe('ViewAllProductsByCatagoryComponent', () => {
  let component: ViewAllProductsByCatagoryComponent;
  let fixture: ComponentFixture<ViewAllProductsByCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductsByCatagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductsByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
