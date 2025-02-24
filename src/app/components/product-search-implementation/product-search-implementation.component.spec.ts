import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchImplementationComponent } from './product-search-implementation.component';

describe('ProductSearchImplementationComponent', () => {
  let component: ProductSearchImplementationComponent;
  let fixture: ComponentFixture<ProductSearchImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchImplementationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
