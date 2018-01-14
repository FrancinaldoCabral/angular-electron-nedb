import { NgModule } from '@angular/core';
import { BackupRoutingModule } from './backup-routing.module';

import { BackupComponent } from './backup.component';

@NgModule({
  imports: [
    BackupRoutingModule
  ],
  declarations: [BackupComponent],
  exports:[BackupComponent]
})
export class BackupModule { }
