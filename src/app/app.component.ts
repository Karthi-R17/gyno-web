import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared-module/components/header/header.components';
import { FooterComponents } from './shared-module/components';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponents]
})
export class AppComponent {
  title = 'queewin-gyno';
}
