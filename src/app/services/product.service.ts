import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define an interface for the product
export interface Product {
  id?: number; // Add an optional id field
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3001/products'; // Adjust this to match your mock JSON server URL.

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    console.log('Fetching products from API'); // Debugging statement
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    console.log('Adding product to API:', product); // Debugging statement
    return this.http.post<Product>(this.apiUrl, product).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a product by id
  deleteProduct(productId: number): Observable<void> {
    console.log('Deleting product from API with ID:', productId); // Debugging statement
    return this.http.delete<void>(`${this.apiUrl}/${productId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message); // Debugging statement
    return throwError('Something went wrong; please try again later.');
  }
}