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

@NgModule({
  declarations: [App, ProductList, ProductAdd, Log, Adm, Users, Category, CategoryAddModal],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
