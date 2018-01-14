import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxElectronModule} from 'ngx-electron';
import {NgxFsModule} from 'ngx-fs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { InclusaoComponent } from './inclusao/inclusao.component';
import { SheetJSComponent } from './sheet-js-component/sheet-js-component.component';

import { DatabaseService } from './services/database.service';
import { BackupComponent } from './backup/backup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InclusaoComponent,
    SheetJSComponent,
    BackupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxElectronModule,
    NgxFsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
