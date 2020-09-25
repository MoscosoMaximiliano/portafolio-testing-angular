import { Route } from '@angular/compiler/src/core';
import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';

const APP_ROUTE: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTE, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}






