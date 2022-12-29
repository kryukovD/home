import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionMainComponent } from './section-main/section-main.component';
import { HeaderComponent } from './header/header.component';
import { FeatureComponent } from './feature/feature.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AllFeatureComponent } from './all-feature/all-feature.component';
import { HomeComponent } from './home/home.component';
import { AllFeatureListComponent } from './all-feature-list/all-feature-list.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { AllWorksComponent } from './all-works/all-works.component';
import { AllWorksListComponent } from './all-works-list/all-works-list.component';
import { SwiperModule } from 'swiper/angular';
import { SliceKitPipe } from './slice-kit.pipe';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    HeaderComponent,
    FeatureComponent,
    PortfolioComponent,
    BlogComponent,
    MapComponent,
    FooterComponent,
    MobileMenuComponent,
    AllFeatureComponent,
    HomeComponent,
    AllFeatureListComponent,
    DetailFeatureComponent,
    AllWorksComponent,
    AllWorksListComponent,
    SliceKitPipe,
    DetailPostComponent,
    BlogListComponent,
    PaginationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    NgbPaginationModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
