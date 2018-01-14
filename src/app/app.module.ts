import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SheetJsModule } from './sheet-js/sheet-js.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import { NgxFsModule } from 'ngx-fs';

import { BackupModule } from './backup/backup.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DatabaseService } from './services/database.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxElectronModule,
    NgxFsModule,
    HomeModule,
    BackupModule,
    AppRoutingModule,
    SheetJsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
