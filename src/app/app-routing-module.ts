import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { ProductList } from './products/product-list/product-list';
import { ProductAdd } from './products/product-add/product-add';
import { Log } from './log/log';
import { Adm } from './administration/adm/adm';
import { Users } from './administration/adm/users/users';
import { CategoryList } from './administration/adm/category-list/category-list';
import { ProductEdit } from './products/product-edit/product-edit';
import { ProductDelete } from './products/product-delete/product-delete';
import { UserAdd } from './administration/adm/user-add/user-add';
import { UserEdit } from './administration/adm/user-edit/user-edit';
import { UserDelete } from './administration/adm/user-delete/user-delete';
import { CategoryEdit } from './administration/adm/category-edit/category-edit';
import { CategoryDelete } from './administration/adm/category-delete/category-delete';
import { Login } from './auth/login/login';
import { authGuardGuard } from './authGuard/auth-guard-guard';

const routes: Routes = [ 

  {
    path: 'login',
    component: Login
  },

  { 
    path: "",
    component: MainLayout,
    canActivate: [authGuardGuard],

    children: [

      {
        path: '',
        component: ProductList, 
      },

      {
        path: 'product',
        component: ProductList,

        children: [
          {
            path: 'productDelete',
            component: ProductDelete
          }
        ]
      },

      {
        path: 'productAdd',
        component: ProductAdd
      },
      {
        path: 'log',
        component: Log
      }, 
      {
        path: 'adm',
        component: Adm,

        children: [
          {
            path: 'users',
            component: Users
          },
          {
            path: 'categoryList',
            component: CategoryList
          },
          {
            path: 'userAdd',
            component: UserAdd
          }, 
          {
            path: 'userEdit',
            component: UserEdit
          },
          {
            path: 'userDelete',
            component: UserDelete
          },
          {
            path: 'categoryEdit',
            component: CategoryEdit
          },
          {
            path: 'categoryDelet',
            component: CategoryDelete
          }
        ]
      },
      {
        path: 'productEdit',
        component: ProductEdit
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
