import { Injectable } from '@angular/core';
import { divisionList, productsList } from '../data/product_const';
import { ourTeams } from '../data/our_teams';
import { carousels } from '../data/carousel_slide';
import { featureServices } from '../data/feature_services';
import { aboutOurs } from '../data/about_ours';
import { galaryImages } from '../data/galary_images';

@Injectable({
    providedIn: 'root' // Makes the service a singleton and available throughout the application
})
export class ProductsService {
    getProducts() {
        return productsList;
    }
    getProductbySlug(slug: string) {
        return productsList.find(x => x.slug == slug);
    }

    getDivision() {
        return divisionList;
    }
    getDivisionbyName(division: string) {
        return divisionList.find(x => x.division == division);
    }

    getOurTeams() {
        return ourTeams;
    }
    getOurTeambyName(name: string) {
        return divisionList.find(x => x.name == name)
    }

    getCaroUsels(){
        return carousels;
    }

    getFeatureServiceList(){
        return featureServices;
    }

    getAboutOurs(){
        return aboutOurs;
    }

    getGalaryImages(){
        return galaryImages;
    }
}