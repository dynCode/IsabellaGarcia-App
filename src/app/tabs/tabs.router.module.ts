import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bank',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bank/bank.module').then(m => m.BankPageModule)
          }
        ]
      },
      {
        path: 'specials',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../specials/specials.module').then(m => m.SpecialsPageModule)
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop/shop.module').then(m => m.ShopPageModule)
          }
        ]
      },
      {
        path: 'wishlist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../wishlist/wishlist.module').then(m => m.WishlistPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'category/:id/:page',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../category/category.module').then(m => m.CategoryPageModule)
          }
        ]
      },
      {
        path: 'product-details/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../product-details/product-details.module').then(m => m.ProductDetailsPageModule)
          }
        ]
      },
      {
        path: 'ts-cs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ts-cs/ts-cs.module').then(m => m.TsCsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/shop',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/shop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
