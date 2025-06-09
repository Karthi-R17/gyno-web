import { Component } from "@angular/core";
import { CarouselComponent } from "../../shared-module/components";
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'landing-page',
  templateUrl: './landing.components.html',
  styleUrls: ['./landing.components.scss'],
  imports: [CarouselComponent]
})

export class LandingPageComponents {

  constructor(
    private router: Router
  ) {

  }
  images = [
    { path: '/src/assets/slide/slide-1.jpg' },
    { path: '/src/assets/slide/slide-2.jpg' },
    { path: '/src/assets/slide/slide-3.jpg' },
  ]

  onClickGyno() {
    this.router.navigate([]).then(result => {  window.open('/gyno', '_blank'); });
     //window.open('/gyno', '_blank');
  }
}