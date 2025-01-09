import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // Product data
  products: Product[] = [];

  // New product form data
  newProduct: Product = {
    name: '',
    price: 0,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load products from the service
  loadProducts(): void {
    console.log('Loading products'); // Debugging statement
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        console.log('Products loaded:', data); // Debugging statement
        this.products = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  // Add a new product
  addProduct(): void {
    console.log('Add Product called'); // Debugging statement
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct(this.newProduct).subscribe(
        (product) => {
          console.log('Product added successfully:', product); // Debugging statement
          this.loadProducts(); // Reload products after adding a new one
          this.newProduct = { name: '', price: 0 }; // Reset the form
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      console.warn('Invalid product data:', this.newProduct); // Debugging statement
    }
  }

  // Delete a product
  deleteProduct(productId: number): void {
    console.log('Delete Product called with ID:', productId); // Debugging statement
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log('Product deleted successfully'); // Debugging statement
        this.loadProducts(); // Reload products after deleting one
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}