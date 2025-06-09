import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  template: `
    <ngb-carousel>
      <ng-template ngbSlide>
        <img src="https://picsum.photos/id/1011/900/500" class="d-block w-100" alt="Slide 1" />
        <div class="carousel-caption">
          <h3>Slide 1</h3>
        </div>
      </ng-template>
      <ng-template ngbSlide>
        <img src="https://picsum.photos/id/1012/900/500" class="d-block w-100" alt="Slide 2" />
        <div class="carousel-caption">
          <h3>Slide 2</h3>
        </div>
      </ng-template>
    </ngb-carousel>
  `
})
export class CarouselComponent {}
