import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../shared-module/components";
import { ProductsService } from '../../shared-module/service/products.service';
import { OurTeam } from '../../shared-module/models/outteam';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'ourteam-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.scss'],
})
export class OurTeamComponent implements AfterViewInit {
  ourTeams!: Array<OurTeam>;
  constructor(
    private productService: ProductsService,
  ) {
    this.ourTeams = productService.getOurTeams();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      new Swiper('.swiper', {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 20,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
         breakpoints: {
        0: {        // Mobile
          slidesPerView: 1
        },
        768: {      // Tablet & Desktop
          slidesPerView: 2
        }
      }
      });
    }, 300); // small delay ensures DOM is fully ready
  }
}
