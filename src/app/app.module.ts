import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailComponent } from './components/employees/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    SettingsComponent,
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
