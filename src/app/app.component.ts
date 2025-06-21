import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared-module/components/header/header.components';
import { FooterComponents } from './shared-module/components';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponents]
})
export class AppComponent {
  //title = 'queewin-gyno';
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Gyno | QwinGyno');
    this.meta.addTags([
      { name: 'description', content: 'Expert gynecological and fertility services including IVF, prenatal care, hormone therapy, and more. Trusted care for every stage of a woman’s life.' },
      { name: 'keywords', content: 'fertility specialist, gynecologist, women’s health, PCOS' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Qwin Gyno - Home' },
      { property: 'og:description', content: 'offering expert care in womens health, prenatal checkups, fertility treatments, and preventive screenings. Compassionate, confidential, and personalized services.' },
    ]);
  }
}
