import { Routes } from '@angular/router';
import { GynoProductsComponent } from '../components';
import { ProductsViewComponent } from '../components/product-view/product-view.component';

export const gynoRoutes: Routes = [
   {
    path: "",
    component: GynoProductsComponent
  },
  {
    path: ":slug", // dynamic slug param
    component: ProductsViewComponent
  },
  {
    path: ":gynova-plus", // dynamic slug param
    component: ProductsViewComponent
  },
  {
    path: ":g-cyst", // dynamic slug param
    component: ProductsViewComponent
  },
  {
    path: "gyno:gynova-plus", // dynamic slug param
    component: ProductsViewComponent
  },
  {
    path: "gyno:g-cyst", // dynamic slug param
    component: ProductsViewComponent
  }
];
