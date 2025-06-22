// generate-routes.mjs
import { readFileSync, writeFileSync } from 'fs';

const products = JSON.parse(readFileSync('src/assets/products.json', 'utf8'));

const staticRoutes = ['/', '/gyno'];
const dynamicRoutes = products.map(p => `/gyno/${p.slug}`);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

writeFileSync('angular.prerender.routes.json', JSON.stringify(allRoutes, null, 2));

console.log('✅ Routes generated:', allRoutes);
