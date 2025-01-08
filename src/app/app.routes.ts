import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';

export const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];
