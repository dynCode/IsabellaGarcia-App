import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
    path: 'tabs',
    component: TabsPage,
    children:
        [
            {
                path: 'bank',
                children:
                    [
                        {
                            path: '',
                            loadChildren: '../bank/bank.module#BankPageModule'
                        }
                    ]
            },
            {
                path: 'specials',
                children:
                    [
                        {
                            path: '',
                            loadChildren: '../specials/specials.module#SpecialsPageModule'
                        }
                    ]
            },
            {
                path: 'shop',
                children:
                    [
                        {
                            path: '',
                            loadChildren: '../shop/shop.module#ShopPageModule'
                        }
                    ]
            },
            {
                path: 'wishlist',
                children:
                    [
                        {
                            path: '',
                            loadChildren: '../wishlist/wishlist.module#WhishlistPageModule'
                        }
                    ]
            },
            {
                path: 'bank',
                children:
                    [
                        {
                            path: '',
                            loadChildren: '../profile/profile.module#ProfilePageModule'
                        }
                    ]
            },
            {
                path: 'category/:id',
                children:
                    [
                        {
                            path: '',
                            loadChildren: '../category/category.module#CategoryPageModule'
                        }
                    ]
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
    imports:
        [
            RouterModule.forChild(routes)
        ],
        exports:
            [
                RouterModule
            ]
    })
export class TabsPageRoutingModule {}