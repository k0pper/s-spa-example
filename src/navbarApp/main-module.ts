import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";
import {NavbarAppComponent} from "./navbarApp.component";

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
	],
	providers: [{provide: APP_BASE_HREF, useValue: '/ng2App/'}],
	declarations: [
		NavbarAppComponent,
	],
	bootstrap: [NavbarAppComponent]
})
export default class MainModule {
}
