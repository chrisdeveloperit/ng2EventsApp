﻿import { Component } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 50px; }
        @media (max-width: 1100px) { #searchForm {display:none} }
    `]

})
export class NavBarComponent {

}