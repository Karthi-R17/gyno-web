import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductsService } from '../../service/products.service';

@Component({
    standalone: true,
    selector: 'app-product-list',
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.scss',
    imports: [CommonModule],
})
export class ProductsListComponent {
    title = 'queewin-gyno';
    productsList: Array<Product> | any;
    constructor(
        private router: Router,
        private productsService: ProductsService
    ) {
        this.productsList = productsService.getProducts();
    }
    products = [
        { name: 'Gynova Plus', slug: 'gynova-plus' },
        { name: 'G Cyst', slug: 'g-cyst' }
    ];

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

}
