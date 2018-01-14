import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
