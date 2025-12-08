import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ProductsListComponent } from '../../../components/products-list/products-list.component';
import { ProductsViewComponent } from '../../../components/product-view/product-view.component';

@Component({
    standalone: true,
    selector: 'app-queewin',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, NgIf, ProductsViewComponent, ProductsListComponent],
})
export class QueewinProductsComponent implements OnInit {
    route = inject(ActivatedRoute);
    title = inject(Title);
    meta = inject(Meta);

    slug!: string;
    product: any;

    //title = 'queewin-gyno';
    constructor() {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.slug = params.get('slug') || 'all';
            console.log("Slug Loaded:", this.slug);
        });
        // this.slug = this.route.snapshot.paramMap.get('slug')!;
        // console.log("this.slug ", this.slug);
        // this.http.get<any[]>('/assets/products.json').subscribe(data => {
        //     this.product = data.find(p => p.slug === this.slug);
        //     console.log(this.product);
        // });
        //this.slug = this.route.snapshot.paramMap.get('slug');
        // Example: fetch the product by slug
        //this.product = this.getProductBySlug(this.slug);
    }
}
