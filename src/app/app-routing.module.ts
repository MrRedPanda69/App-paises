import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerCountryComponent } from './country/pages/per-country/per-country.component';
import { PerRegionComponent } from './country/pages/per-region/per-region.component';
import { PerCapitalComponent } from './country/pages/per-capital/per-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';
import { Error404Component } from './country/pages/error404/error404.component';

const routes: Routes = [
    {
        path: '',
        component: PerCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PerRegionComponent
    },
    {
        path: 'capital',
        component: PerCapitalComponent
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}