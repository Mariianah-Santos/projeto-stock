import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LayoutModule } from './layout/layout-module';
import { ProductList } from './products/product-list/product-list';
import { MatIconModule } from '@angular/material/icon';
import { ProductAdd } from './products/product-add/product-add';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Log } from './log/log';
import { Adm } from './administration/adm/adm';
import { Users } from './administration/adm/users/users';
import { Category } from './administration/adm/category/category';
import { CategoryAddModal } from './administration/adm/category-add-modal/category-add-modal';
import { ProductEdit } from './products/product-edit/product-edit';
import { ProductDelete } from './products/product-delete/product-delete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserAdd } from './administration/adm/user-add/user-add';
import { UserEdit } from './administration/adm/user-edit/user-edit';
import { UserDelete } from './administration/adm/user-delete/user-delete';
import { CategoryEdit } from './administration/adm/category-edit/category-edit';
import { CategoryDelete } from './administration/adm/category-delete/category-delete';

@NgModule({
  declarations: [
    App,
    ProductList,
    ProductAdd,
    Log,
    Adm,
    Users,
    Category,
    CategoryAddModal,
    ProductEdit,
    ProductDelete,
    UserAdd,
    UserEdit,
    UserDelete,
    CategoryEdit,
    CategoryDelete,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
