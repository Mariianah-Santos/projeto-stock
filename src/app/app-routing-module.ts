import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { ProductList } from './products/product-list/product-list';
import { ProductAdd } from './products/product-add/product-add';
import { Log } from './log/log';
import { Adm } from './administration/adm/adm';
import { Users } from './administration/adm/users/users';
import { Category } from './administration/adm/category/category';
import { ProductEdit } from './products/product-edit/product-edit';
import { ProductDelete } from './products/product-delete/product-delete';
import { UserAdd } from './administration/adm/user-add/user-add';
import { UserEdit } from './administration/adm/user-edit/user-edit';
import { UserDelete } from './administration/adm/user-delete/user-delete';
import { CategoryEdit } from './administration/adm/category-edit/category-edit';
import { CategoryDelete } from './administration/adm/category-delete/category-delete';

const routes: Routes = [ 
  { path: "",
    component: MainLayout,
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
              path: 'category',
              component: Category
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
