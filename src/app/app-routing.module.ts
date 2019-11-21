import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'landing-page', loadChildren: './landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'account', loadChildren: './profile/account/account.module#AccountPageModule' },
  { path: 'orders', loadChildren: './profile/orders/orders.module#OrdersPageModule' },
  { path: 'gift-cards', loadChildren: './profile/gift-cards/gift-cards.module#GiftCardsPageModule' },
  { path: 'coupons', loadChildren: './profile/coupons/coupons.module#CouponsPageModule' },
  { path: 'addresses', loadChildren: './profile/addresses/addresses.module#AddressesPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'ts-cs', loadChildren: './ts-cs/ts-cs.module#TsCsPageModule' },
  { path: 'faq', loadChildren: './profile/faq/faq.module#FaqPageModule' },
  { path: 'contact-us', loadChildren: './profile/contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'video-tour', loadChildren: './video-tour/video-tour.module#VideoTourPageModule' },

  /*TABS PAGES*/
  //{ path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' },
  //{ path: 'bank', loadChildren: './bank/bank.module#BankPageModule' },
  //{ path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  //{ path: 'specials', loadChildren: './specials/specials.module#SpecialsPageModule' },
  //{ path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  //{ path: 'category/:id', loadChildren: './category/category.module#CategoryPageModule' },
  //{ path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' }
  //{ path: 'ts-cs', loadChildren: './ts-cs/ts-cs.module#TsCsPageModule' },
  //{ path: 'search-results', loadChildren: './search-results/search-results.module#SearchResultsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
