import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFeatureComponent } from './all-feature/all-feature.component';
import { AllWorksComponent } from './all-works/all-works.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { HomeComponent } from './home/home.component';
import {DetailPostComponent} from './detail-post/detail-post.component'
import { BlogListComponent } from './blog-list/blog-list.component';
import{PageNotFoundComponent} from "./page-not-found/page-not-found.component"


const routes: Routes = [
  {path:'feature/all',component:AllFeatureComponent},
  {path:'works/all',component:AllWorksComponent},
  {path:"article/all",component:BlogListComponent},
  {path:'',component:HomeComponent },
  {path:'feature/:id',component:DetailFeatureComponent},
  {path:'article/:id',component:DetailPostComponent},
  { path: '**', component: PageNotFoundComponent }, 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
