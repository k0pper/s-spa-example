"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app2_component_1 = require("./app2.component");
var subroute1_component_1 = require("./subroute1.component");
var subroute2_component_1 = require("./subroute2.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var appRoutes = [
    {
        path: 'subroute1',
        component: subroute1_component_1.Subroute1
    },
    {
        path: 'subroute2',
        component: subroute2_component_1.Subroute2
    },
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes, {
                    useHash: true
                }),
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/ng2AppRoute/' }],
            declarations: [
                app2_component_1.Ng2AppComponent,
                subroute1_component_1.Subroute1,
                subroute2_component_1.Subroute2,
            ],
            bootstrap: [app2_component_1.Ng2AppComponent]
        })
    ], MainModule);
    return MainModule;
}());
exports.default = MainModule;
//# sourceMappingURL=main-module.js.map