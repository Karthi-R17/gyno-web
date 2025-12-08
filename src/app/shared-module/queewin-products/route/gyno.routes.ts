import { Routes } from '@angular/router';
import { QueewinProductsComponent } from '../components';

export const queewinRoutes: Routes = [
  {
    path: ":slug",
    component: QueewinProductsComponent
  },
  {
    path: ":",
    component: QueewinProductsComponent
  },
  // {
  //   path: ":slug", // dynamic slug param
  //   component: ProductsViewComponent
  // }
];
