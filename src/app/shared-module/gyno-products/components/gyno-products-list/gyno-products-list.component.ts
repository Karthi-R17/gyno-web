import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-gyno-list',
    templateUrl: './gyno-products-list.component.html',
    styleUrl: './gyno-products-list.component.scss',
})
export class GynoProductsListComponent {
    title = 'queewin-gyno';
    constructor(
        private router: Router
    ) {
//
    }
     products = [
    { name: 'Gynova Plus', slug: 'gynova-plus' },
    { name: 'G Cyst', slug: 'g-cyst' }
  ];
    onClickProductView(url: string) {
        console.log(url);   
        this.router.navigate(['/gyno', url]);
    }
}
