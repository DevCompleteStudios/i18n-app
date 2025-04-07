import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./pages/products-page/products-page.component'),
    },
    {
        path: 'basic-plan',
        loadComponent: () => import('./pages/basic-plan-page/basic-plan-page.component'),
    },
    {
        path:'**',
        redirectTo: 'products'
    }
];
