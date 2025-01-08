import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
