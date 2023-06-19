import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlannerListComponent } from './planner-list/planner-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FooterBottomComponent } from './contact/footer-bottom/footer-bottom.component';
import { FooterTopComponent } from './contact/footer-top/footer-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlannerListComponent,
    AboutUsComponent,
    ContactComponent,
    FooterBottomComponent,
    FooterTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatMenuModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
