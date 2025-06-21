import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrl: './product-view.component.scss',
    imports: [HttpClientModule, CommonModule]
})
export class ProductsViewComponent implements OnInit {

    route = inject(ActivatedRoute);
    title = inject(Title);
    meta = inject(Meta);
    http = inject(HttpClient);

    slug: any;
    product: any;


    constructor() {

    }
    ngOnInit(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')!;
        console.log("this.slug ", this.slug);
        this.http.get<any[]>('/assets/products.json').subscribe(data => {
            this.product = data.find(p => p.slug === this.slug);
            console.log(this.product);
        });
        //this.slug = this.route.snapshot.paramMap.get('slug');
        // Example: fetch the product by slug
        //this.product = this.getProductBySlug(this.slug);
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
