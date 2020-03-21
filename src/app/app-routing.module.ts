import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from "./services/security.guard";

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
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  { path: "home", component: HomeComponent, canActivate: [] },
  { path: "login", component: LoginComponent },
  { path: "employees", component:EmployeesComponent, canActivate: [], children:[
    { path: "employee-detail/:index", component: EmployeeDetailComponent , canActivate: []},
    { path: "employee-detail", component: EmployeeDetailComponent, canActivate: [] },
    { path: "employee-list", component: EmployeeListComponent, canActivate: [] },
  ]},
  { path: "products", component: ProductsComponent, canActivate: [], children: [
    { path: "product-detail/:index", component: ProductDetailComponent , canActivate: []},
    { path: "product-detail", component: ProductDetailComponent, canActivate: [] },
    { path: "product-list", component: ProductListComponent , canActivate: []},
  ]},
  { path: "users", component: UsersComponent, canActivate: [], children: [
    { path: "user-detail", component: UserDetailComponent, canActivate: [] },
    { path: "user-list", component: UserListComponent, canActivate: [] },
  ]},
  { path: "settings", component: SettingsComponent, canActivate: []}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
