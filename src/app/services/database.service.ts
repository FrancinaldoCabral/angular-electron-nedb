var FileSaver = require('file-saver');

import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import * as Datastore from 'nedb';


@Injectable()
export class DatabaseService {
  beneficiarios:Datastore;
/*   descontos:Datastore;
  enderecos:Datastore;
  especialidades:Datastore;
  inclusoes:Datastore;
  patentes:Datastore;
  processos:Datastore;
  rotas:Datastore;
  transportes:Datastore;
  dataBackup:any; */
  dataBackup:any;
  userDataPath:any;
  constructor(private _electronService: ElectronService) {
    var userDataPath = this._electronService.remote.app.getPath('userData');
/*     this.descontos = new Datastore({filename:userData+"/descontos.db", autoload:true});
    this.enderecos = new Datastore({filename:userData+"/enderecos.db", autoload:true});
    this.especialidades = new Datastore({filename:userData+"/especialidades.db", autoload:true});
    this.inclusoes = new Datastore({filename:userData+"/inclusoes.db", autoload:true});
    this.patentes = new Datastore({filename:userData+"/patentes.db", autoload:true});
    this.processos = new Datastore({filename:userData+"/processos.db", autoload:true});
    this.rotas = new Datastore({filename:userData+"/rotas.db", autoload:true});
    this.transportes = new Datastore({filename:userData+"/transportes.db", autoload:true}); */
  }

  thisDb(){
    return{
      beneficiarios:function(){
        return new Datastore({filename:this.userDataPath+"/teste2.db",autoload:true});
      }
    }
/*     return {
      beneficiarios: function(){
        var userData = this._electronService.remote.app.getPath('userData');
        return new Datastore({filename:userData+"/beneficiarios.db", autoload:true});;
      },
      descontos: function(){
        return this.descontos;
      },
      inclusoes: function(){
        return this.inclusoes;
      },
      processos: function(){
        return this.processos;
      },
      enderecos: function(){
        return this.enderecos;
      },
      rotas: function(){
        return this.rotas;
      },
      transportes: function(){
        return this.transportes;
      },
      especialidades: function(){
        return this.especialidades;
      },
      patentes: function(){
        return this.patentes;
      } 
    }*/
    
  }

  backup(){
		this.thisDb().beneficiarios().find({}, function (err, docs) {
      console.log(docs);
      /*this.dataBackup = docs;
      this.descontos.find({}, function (err, docs) {
        this.dataBackup.descontos = docs;
        this.enderecos.find({}, function (err, docs) {
          this.dataBackup.enderecos = docs;
          this.especialidades.find({}, function (err, docs) {
            this.dataBackup.especialidades = docs;
            this.inclusoes.find({}, function (err, docs) {
              this.dataBackup.inclusoes = docs;
              this.patentes.find({}, function (err, docs) {
                this.dataBackup.patentes = docs;
                this.processos.find({}, function (err, docs) {
                  this.dataBackup.processos = docs;
                  this.rotas.find({}, function (err, docs) {
                    this.dataBackup.rotas = docs;
                    this.transportes.find({}, function (err, docs) {
                      this.dataBackup.transportes = docs;
                      var blob = new Blob(this.dataBackup, {type: "application/json"});
                      FileSaver.saveAs(blob, "backup_aux_transporte.json");
                    });  
                  }); 
                });
              });  
            }); 
          }); 
        });         
      });         */
      var blob = new Blob([JSON.stringify(docs)], {type: "application/json"});
      FileSaver.saveAs(blob, "aux_transporte.json");
    });  
  }
  
}
