import { DatabaseService } from './../services/database.service';
//declare var require: any;
//declare var fs: any;
var FileSaver = require('file-saver');


import { Component, OnInit } from '@angular/core';
//import * as XLSX from 'xlsx';
//import { saveAs } from 'file-saver';
//import * as store from 'electron-store';
//import {LocalStorage, SessionStorage} from 'angular-localstorage/angular-localstorage';
import * as Datastore from 'nedb';
//import { remote, app } from 'electron';
//import { app } from 'electron';
import { ElectronService } from 'ngx-electron';
import * as path from 'path';
import {FsService} from 'ngx-fs';

@Component({
  selector: 'app-home',
	templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	db: Datastore;
	constructor(
		private dataBaseService: DatabaseService, 
		private _electronService: ElectronService) {
	}

	ngOnInit() {
			//this.db.loadDatabase();
			console.log();
	}
	insert(){
		this.dataBaseService.thisDb().beneficiarios().insert({nome:"Francinaldo da F. Cabral", grad:"3SG-FN-IF"}, function(err, dado){
			console.log(dado);
		})
/* 		this.dataBaseService.thisDb().beneficiarios()
			.insert({nome:"Francinaldo da F. Cabral", grad:"3SG-FN-IF"}, 
				function(err, data){
					console.log(data);
				}); */
}

	backup(){
		this.dataBaseService.backup();
	}

	electron(){
		alert(this._electronService.remote.app.getPath('userData'));
	}

	find(){
		this.dataBaseService.thisDb().beneficiarios().find({}, function (err, docs) {
			console.log(docs);
			var message ="";
			for(var index=0; index<docs.length; index++){
				message = message + "doc:"+docs[index].doc+" - _id: "+docs[index]._id+"\n";
				
			}
			alert(message);
		}); 
	}
	
}


