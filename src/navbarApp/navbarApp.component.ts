import {Component} from '@angular/core';

@Component({
    selector: 'navbarApp',
    template: `
            <div class="navbar">
                <ul>
                   <li>
                       <a href="#/reactAppRoute">React App</a>
                   </li>
                    <li>
                        <a href="#/ng2AppRoute">Angular2 App</a>
                    </li>
                </ul>
            </div>
    `,
    styles: [`
        .navbar {
        position: fixed;
        top: 0;
        left: 0;
        background-color: #111D4A;
        color: white;
        font-size: 18px;
        font-weight: bold;
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;
    }

    .navbar ul {
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    .navbar li {
        padding-right: 24px;
        height: 100%;
    }

    .navbar li:hover {
        opacity: 0.8;
    }

    .navbar a {
        text-decoration: none;
        color: white;
    }`
    ]
})
export class NavbarAppComponent {
}
