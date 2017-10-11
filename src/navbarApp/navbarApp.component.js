"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavbarAppComponent = /** @class */ (function () {
    function NavbarAppComponent() {
    }
    NavbarAppComponent = __decorate([
        core_1.Component({
            selector: 'navbarApp',
            template: "\n            <div class=\"navbar\">\n                <ul>\n                   <li>\n                       <a href=\"#/reactAppRoute\">React App</a>\n                   </li>\n                    <li>\n                        <a href=\"#/ng2AppRoute\">Angular2 App</a>\n                    </li>\n                </ul>\n            </div>\n    ",
            styles: ["\n        .navbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        background-color: #111D4A;\n        color: white;\n        font-size: 18px;\n        font-weight: bold;\n        width: 100%;\n        height: 75px;\n        display: flex;\n        align-items: center;\n    }\n\n    .navbar ul {\n        display: flex;\n        align-items: center;\n        list-style-type: none;\n    }\n\n    .navbar li {\n        padding-right: 24px;\n        height: 100%;\n    }\n\n    .navbar li:hover {\n        opacity: 0.8;\n    }\n\n    .navbar a {\n        text-decoration: none;\n        color: white;\n    }"
            ]
        })
    ], NavbarAppComponent);
    return NavbarAppComponent;
}());
exports.NavbarAppComponent = NavbarAppComponent;
//# sourceMappingURL=navbarApp.component.js.map