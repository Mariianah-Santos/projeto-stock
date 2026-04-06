import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// imports do view module
import { LayoutModule } from './layout/layout-module';

// imports do product
import { ProductList } from './products/product-list/product-list';
import { ProductEdit } from './products/product-edit/product-edit';
import { ProductDelete } from './products/product-delete/product-delete';
import { ProductAdd } from './products/product-add/product-add';

// import do adm
import { Log } from './log/log';
import { Adm } from './administration/adm/adm';
import { Users } from './administration/adm/users/users';

// imports de categoria
import { CategoryList } from './administration/adm/category-list/category-list';
import { CategoryAddModal } from './administration/adm/category-add-modal/category-add-modal';
import { CategoryEdit } from './administration/adm/category-edit/category-edit';
import { CategoryDelete } from './administration/adm/category-delete/category-delete';

// import dos users
import { UserAdd } from './administration/adm/user-add/user-add';
import { UserEdit } from './administration/adm/user-edit/user-edit';
import { UserDelete } from './administration/adm/user-delete/user-delete';

// imports do Material
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Login } from './auth/login/login';
import { Loaing } from './load/loaing/loaing';

@NgModule({
  declarations: [
    App,
    ProductList,
    ProductAdd,
    Log,
    Adm,
    Users,
    CategoryAddModal,
    ProductEdit,
    ProductDelete,
    UserAdd,
    UserEdit,
    UserDelete,
    CategoryEdit,
    CategoryDelete,
    CategoryList,
    Login,
    Loaing,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
