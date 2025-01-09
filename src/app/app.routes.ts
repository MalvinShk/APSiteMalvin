import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';

// Define the application routes
export const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent }, // Route for authentication
  { path: 'users', component: UsersComponent }, // Route for users management
  { path: 'products', component: ProductsComponent }, // Route for products management
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Default route
];