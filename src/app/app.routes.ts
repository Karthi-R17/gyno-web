import { Routes } from '@angular/router';
import { LandingPageComponents } from './core-components';

export const routes: Routes = [
    {
        path: "", component: LandingPageComponents
    },
    {
        path: "gyno",
        loadChildren: () =>
            import('./shared-module/gyno-products/route/gyno.routes')
                .then(r => r.gynoRoutes)
    },
    {
        path: 'gyno/:slug',
        loadChildren: () =>
            import('./shared-module/gyno-products/route/gyno.routes')
                .then(m => m.gynoRoutes)
    }
];
