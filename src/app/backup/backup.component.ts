import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {
  fileInputVariable: any;
  data:any;
  constructor(private _dbService:DatabaseService) { }

  ngOnInit() {
  }

  export(){
    this._dbService.backup();
  }

  import(){

  }

  onFileChange(evt: any) {

		/* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read file */
      //const bstr: string = e.target.result;
      this.data = JSON.parse(e.target.result);
    };
    /* save data */
		reader.readAsBinaryString(target.files[0])
  }
  
  save(){
    this._dbService.thisDb().beneficiarios()
    .insert(this.data, function(err, dado){
      if(err) console.log(err);
      console.log(dado);
    })
  }
  clear(){
    this._dbService.thisDb().beneficiarios().remove({}, { multi: true }, function (err, numRemoved) {
    });
  }

}
