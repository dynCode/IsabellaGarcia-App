import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},

  /*TABS PAGES*/
  //{ path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' },
  //{ path: 'bank', loadChildren: './bank/bank.module#BankPageModule' },
  //{ path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  //{ path: 'specials', loadChildren: './specials/specials.module#SpecialsPageModule' },
  //{ path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  //{ path: 'category/:id', loadChildren: './category/category.module#CategoryPageModule' },
  //{ path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
