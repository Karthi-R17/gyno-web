import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../shared-module/components";
import { ProductsService } from '../../shared-module/service/products.service';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html'
})
export class HeroCarouselComponent implements AfterViewInit {
  carousels: any;
  constructor(
    private productService: ProductsService,
  ) {
    this.carousels = productService.getCaroUsels();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      new Swiper('.swiper', {
        loop: true,
        pagination: { el: '.swiper-pagination' }
      });
    });
  }
}
