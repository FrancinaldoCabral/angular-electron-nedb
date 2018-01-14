import { BackupComponent } from './backup/backup.component';
import { InclusaoComponent } from './inclusao/inclusao.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inclusao', component: InclusaoComponent},
  { path: 'backup', component: BackupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
