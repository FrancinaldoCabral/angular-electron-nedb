import { BackupComponent } from './backup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const backupRoutes: Routes = [
  { path: 'backup', component: BackupComponent }
];

@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    RouterModule.forChild(backupRoutes)
  ],
  declarations: []
})
export class BackupRoutingModule { }
