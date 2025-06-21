import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.components.html',
    styleUrls: ['./header.components.scss'],
    imports: [RouterModule]
})

export class HeaderComponent implements OnInit{
    ngOnInit(): void {
        
    }
    
}