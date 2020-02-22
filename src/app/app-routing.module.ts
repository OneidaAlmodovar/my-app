import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailComponent } from './components/employees/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component:EmployeesComponent, children:[
    { path: "employee-detail", component: EmployeeDetailComponent },
    { path: "employee-list", component: EmployeeListComponent },
  ]},
  { path: "products", component: ProductsComponent, children: [
    { path: "product-detail", component: ProductDetailComponent },
    { path: "product-list", component: ProductListComponent },
  ]},
  { path: "users", component: UsersComponent, children: [
    { path: "user-detail", component: UserDetailComponent },
    { path: "user-list", component: UserListComponent },
  ]},
  { path: "settings", component: SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
