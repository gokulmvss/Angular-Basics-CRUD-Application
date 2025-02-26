import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { Product } from '../entity/product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new product',()=>{
    const newProduct = new Product(3, 'Samsung', 1500, 'Samsung Phone', 'https://example.com/samsung.jpg');
    service.addNewProduct(newProduct);
    const products = service.getAllProducts();
    expect(products.length).toBe(3);
    expect(products[2]).toEqual(newProduct);
  })

  it('should get all products', () => {
    const products = service.getAllProducts();
    expect(products.length).toBe(2); // Initially added 2 products
  });

  it('should delete product by ID', () => {
    service.deleteProductById(1);
    const products = service.getAllProducts();
    expect(products.length).toBe(1); // 1 product should be deleted
    expect(products[0].id).not.toBe(1);
  });

  it('should update product', () => {
    const updatedProduct = new Product(1, 'Android', 1200, 'Updated Android Phone', 'https://example.com/android.jpg');
    const result = service.updateProduct(updatedProduct);
    const product = service.getProductById(1);
    expect(result).toBe(true);
    expect(product?.name).toBe('Android');
    expect(product?.price).toBe(1200);
    expect(product?.description).toBe('Updated Android Phone');
    expect(product?.url).toBe('https://example.com/android.jpg');
  });

  it('should get product by ID', () => {
    const product = service.getProductById(1);
    expect(product?.id).toBe(1);
    expect(product?.name).toBe('Android');
  });

  it('should not update product with invalid ID',()=>{
    const updateProduct = new Product(999,"",0,"","");
    expect(service.updateProduct(updateProduct)).toBe(false);
  });
});
