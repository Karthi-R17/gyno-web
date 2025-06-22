import { RouterOutlet } from '@angular/router';
import { GynoProductsListComponent } from '../gyno-products-list/gyno-products-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductsViewComponent } from '../product-view/product-view.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-gyno',
  templateUrl: './gyno-home.component.html',
  styleUrl: './gyno-home.component.scss',
  imports: [CommonModule, GynoProductsListComponent, ProductsViewComponent],
})
export class GynoProductsComponent implements OnInit{
      route = inject(ActivatedRoute);
      title = inject(Title);
      meta = inject(Meta);
      http = inject(HttpClient);
  
      slug: any;
      product: any;
  
  //title = 'queewin-gyno';
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
}
