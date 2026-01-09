import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared-module/models/product';
import { ProductsService } from '../../shared-module/service/products.service';
import { take } from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'land-product-list',
    templateUrl: './land-products-list.component.html',
    styleUrl: './land-products-list.component.scss',
    imports: [CommonModule],
})
export class LandProductsListComponent {
    title = 'queewin-gyno';
    productsList: any = [];
    constructor(
        private router: Router,
        private productsService: ProductsService
    ) {
        this.productsList = productsService.getProducts().slice(0, 8);
    }
   
    onClickProductView(division: string, slug: string) {
        console.log(slug, " division ", division);
        this.router.navigate(['/' + division, slug]);
    }

    onImgError(event: any) {
        event.target.src = 'assets/img/products/empty_tabletes_img.jpeg';
    }

    calculateDiscount(mrp: number, price: number) {
        const discount = ((mrp - price) / mrp) * 100;
        return Math.round(discount); // e.g. 20%
    }
    
    onClickDivision(division: string) {
    console.log("Test");
    this.router.navigate([]).then(result => { window.open('/' + division + '/all', '_blank'); });
    //window.open('/gyno', '_blank');
  }
}
