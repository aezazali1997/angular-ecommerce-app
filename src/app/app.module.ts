import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousalComponent } from './components/carousal/carousal.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoriesMonthlyComponent } from './components/home/categories-monthly/categories-monthly.component';
import { FeaturedProductComponent } from './components/home/featured-product/featured-product.component';
import { SingleComponentComponent } from './components/home/featured-product/single-component/single-component.component';
import { MatCardModule } from '@angular/material/card';
import { StarComponent } from './components/home/featured-product/single-component/star/star.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    CarousalComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    ErrorPageComponent,
    CategoriesMonthlyComponent,
    FeaturedProductComponent,
    SingleComponentComponent,
    StarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
