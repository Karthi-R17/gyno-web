import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GynoProductsListComponent } from '../gyno-products-list/gyno-products-list.component';

@Component({
  standalone: true,
  selector: 'app-gyno',
  templateUrl: './gyno-home.component.html',
  styleUrl: './gyno-home.component.scss',
  imports: [GynoProductsListComponent],
})
export class GynoProductsComponent {
  title = 'queewin-gyno';
}
