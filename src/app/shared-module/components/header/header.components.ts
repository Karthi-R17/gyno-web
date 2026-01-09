import { Component, HostListener, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.components.html',
    styleUrls: ['./header.components.scss'],
    imports: [RouterModule]
})

export class HeaderComponent implements OnInit {
    ngOnInit(): void {

    }
    activeSection = 'hero';

    @HostListener('window:scroll', [])
    onScroll() {
        const sections = ['hero', 'about', 'services', 'contact'];

        for (let section of sections) {
            const el = document.getElementById(section);
            if (el && window.scrollY >= el.offsetTop - 120) {
                this.activeSection = section;
            }
        }
    }

}