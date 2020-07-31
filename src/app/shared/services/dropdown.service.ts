import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from './../models/estado-br.model';
import { Cidade } from '../models/cidade';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
      .pipe(
        // tslint:disable-next-line:triple-equals
        map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
      );
  }

  getCargos() {
    return [
      { nome: 'jovAprend', nivel: '1', desc: 'Jovem Aprendiz' },
      { nome: 'Estag', nivel: '2', desc: 'Estagiario' },
      { nome: 'Ana/Espec', nivel: '3', desc: 'Analista/ Especialista' },
      { nome: 'Gestor', nivel: '4', desc: 'Gestor' }
    ];
  }
  getTecnologias() {

    return [
      { nome: 'hadoop', desc: 'Hadoop' },
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'kotlin', desc: 'Kotlin' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },
      { nome: 'sql', desc: 'SQL' },
      { nome: 'tableau', desc: 'Tableau' },
    ];
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }
}
