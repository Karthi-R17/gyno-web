import { AfterViewInit, Component } from "@angular/core";
import { CarouselComponent } from "../../shared-module/components";
import { Router } from '@angular/router';
import { ProductsService } from "../../shared-module/service/products.service";
import { Division } from "../../shared-module/models/division";
import { CommonModule } from "@angular/common";
import { OurTeam } from "../../shared-module/models/outteam";
import { Carousel } from "../../shared-module/models/carousel";
import { FeaturedService } from "../../shared-module/models/featureservices";
import { About } from "../../shared-module/models/about";
import { Galary } from "../../shared-module/models/galary";
import { HeroCarouselComponent } from "../carousel-components/hero-carousel.component";
import { OurTeamComponent } from "../ourteam-components/ourteam.component";
import { LandProductsListComponent } from "../land-products-list/land-products-list.component";

@Component({
  standalone: true,
  selector: 'landing-page',
  templateUrl: './landing.components.html',
  styleUrls: ['./landing.components.scss'],
  imports: [CarouselComponent, CommonModule, HeroCarouselComponent, OurTeamComponent, LandProductsListComponent]
})

export class LandingPageComponents implements AfterViewInit {
  divisions!: Array<Division>;
  ourTeams!: Array<OurTeam>;
  carousels!: Array<Carousel>;
  featuredServicesList!: Array<FeaturedService>;
  aboutOursList!: About;
  galaryImages!: Galary;
  constructor(
    private router: Router,
    private productService: ProductsService,
  ) {
    this.divisions = productService.getDivision();
    this.ourTeams = productService.getOurTeams();
    this.carousels = productService.getCaroUsels();
    this.featuredServicesList = productService.getFeatureServiceList();
    this.aboutOursList = productService.getAboutOurs();
    this.galaryImages = productService.getGalaryImages();
  }

  onClickDivision(division: string) {
    console.log("Test");
    this.router.navigate([]).then(result => { window.open('/' + division + '/all', '_blank'); });
    //window.open('/gyno', '_blank');
  }
  ngAfterViewInit() {
  const carousel = document.querySelector('#heroCarousel');
  const indicators = document.querySelector('#hero-carousel-indicators');
  const items = carousel?.querySelectorAll('.carousel-item');

  if (!carousel || !indicators || !items) return;

  items.forEach((_, index) => {
    const li = document.createElement('li');
    li.setAttribute('data-bs-target', '#heroCarousel');
    li.setAttribute('data-bs-slide-to', index.toString());

    if (index === 0) {
      li.classList.add('active');
      li.setAttribute('aria-current', 'true');
    }

    indicators.appendChild(li);
  });
}

}