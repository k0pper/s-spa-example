"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2AppComponent = /** @class */ (function () {
    function Ng2AppComponent() {
    }
    Ng2AppComponent = __decorate([
        core_1.Component({
            selector: 'ng2App',
            template: "\n\t\t<div style=\"margin-top: 100px;\">\n\t\t\tThis was rendered by App2 which is written in Angular\n\t\t</div>\n\t\t<a [routerLink]=\"['/subroute1']\" routerLinkActive=\"active\">Angular route 1</a>\n\t\t<a [routerLink]=\"['/subroute2']\" routerLinkActive=\"active\">Angular route 2</a>\n\n\t\t<router-outlet></router-outlet>\n\t",
        })
    ], Ng2AppComponent);
    return Ng2AppComponent;
}());
exports.Ng2AppComponent = Ng2AppComponent;
//# sourceMappingURL=app2.component.js.map