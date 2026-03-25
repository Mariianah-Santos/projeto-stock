import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { SidebarDefault } from './sidebar-default/sidebar-default';
import { MainLayout } from './main-layout/main-layout';
import { MatIconModule } from '@angular/material/icon';
import { Dropdown } from './dropdown/dropdown';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  declarations: [Navbar, SidebarDefault, MainLayout, Dropdown],
  imports: [CommonModule, MatIconModule,  MatSidenavModule, MatListModule, AppRoutingModule],
  exports: [Dropdown]
})
export class LayoutModule {}
