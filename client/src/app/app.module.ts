import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowboxComponent } from './showbox/showbox.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TemplatesComponent } from './templates/templates.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowboxComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    TemplatesComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYlLpcrvBVKytopDFf4NZJM0nD3u98yKo'
    }),
    CarouselModule.forRoot()
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
