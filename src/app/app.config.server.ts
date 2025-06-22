import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { readFileSync } from 'fs';
import { join } from 'path';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);


export const serverRoutes: any = [
  {
    path: 'gyno/:slug',
    //renderMode: RenderMode.Prerender,
    renderMode: 'prerender',
    async getPrerenderParams() {
      const filePath = join(process.cwd(), 'src/assets/products.json');
      const products = JSON.parse(readFileSync(filePath, 'utf8'));
       return products.map((product: { slug: string }) => ({
        slug: product.slug
      }));
    }
  }
];
