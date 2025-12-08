import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
    standalone: true,
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrl: './product-view.component.scss',
    imports: [HttpClientModule, CommonModule, NgIf]
})
export class ProductsViewComponent implements OnInit {

    route = inject(ActivatedRoute);
    title = inject(Title);
    meta = inject(Meta);
    http = inject(HttpClient);
    productsService = inject(ProductsService)

    product: any;
    @Input() slug!: string;
    showMore = false;
    constructor() {

    }
    ngOnInit(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')!;
        this.product = this.productsService.getProductbySlug(this.slug);
    }

    getProductBySlug(slug: string) {
        // Replace with actual API or service logic
        const products = [
            { slug: 'gynova-plus', name: 'Gynova Plus', description: 'For hormonal balance' },
            { slug: 'g-cyst', name: 'G-Cyst', description: 'For cyst care' }
        ];
        return products.find(p => p.slug === slug);
    }
    buyProduct() {
        alert(`Buying ${this.product.name} - Coming soon!`);
    }

}
