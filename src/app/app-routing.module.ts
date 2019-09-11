import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  //{ path: 'bank', loadChildren: './bank/bank.module#BankPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  //{ path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  //{ path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' },
  //{ path: 'specials', loadChildren: './specials/specials.module#SpecialsPageModule' },
  //{ path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  //{ path: 'category/:id', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'product/:id', loadChildren: './product/product.module#ProductPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
