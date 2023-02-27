import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from "./carousel/carousel.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgbdCarouselBasic
    ]
})
export class AppModule { }
