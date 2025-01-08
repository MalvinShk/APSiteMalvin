import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 100 },
    { name: 'Product 2', description: 'Description 2', price: 200 },
    { name: 'Product 3', description: 'Description 3', price: 300 }
  ];
}
