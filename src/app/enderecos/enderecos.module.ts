import { NovoEnderecoComponent } from './novo-endereco/novo-endereco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NovoEnderecoComponent],
  exports:[NovoEnderecoComponent]
})
export class EnderecosModule { }
