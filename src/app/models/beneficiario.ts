import { Endereco } from './endereco';
import { Patente } from "./patente";
import { Especialidade } from "./especialidade";

export class Beneficiario {
    postoGraduacao:Patente;
    especialidade:Especialidade;
    nip:string;
    nome:string;
    setor:string;
    auxilioTransporte:number;
    endereco:Endereco;
    
 /*    descontoDnt(dnt):number {
        return (this.auxilioTransporte / 22)*dnt;
    };
    
    acertoDnt(dnt):number {
        return ((this.soldo / 30)*0.06)*dnt;
    } */
}
