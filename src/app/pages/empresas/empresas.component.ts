import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';
import { Empresas } from 'src/app/shared/interfaces/empresas';

import { DataService } from './../../shared/services/data.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  items: Observable<any[]>;
  empresaMasVentas: any = [];
  mesMasVentas: any = [];

  constructor(
    private router: Router,
    private db: DataService
  ) { }

  ngOnInit(): void {
    let data: any = [];
    let result: any = [];
    this.items = this.db.getEmpresas().pipe(
      map(actions => {
        return actions.map(a => {
            data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        });
      }),
      tap((res) => this.getMesMasVentas(res)),
      map((data) => {
        let map = data.reduce((prev, next) =>{
          if (next.slug in prev) prev[next.slug].finalPrice += next.finalPrice;
          else prev[next.slug] = next;
          return prev;
        }, {});
        return Object.keys(map).map(id => map[id]);
      }),
      tap((res) => {
        this.db.setEmpresas$(res);
        this.getEmpresaMasVentas(res)
      })
    )
  }

  getEmpresaMasVentas = (res: any) => this.empresaMasVentas = res.sort((a: any, b: any) => b.finalPrice - a.finalPrice)[0];

  getMesMasVentas = (data: any) => {
    let map = [];
    let result = [];
    data.forEach(el => el.mes = new Date(el.day).getMonth());
    map = data.reduce((prev, next) =>{
      if (next.mes in prev) prev[next.mes].finalPrice += next.finalPrice;
      else prev[next.mes] = next;
      return prev;
    }, {});
    result = Object.keys(map).map(id => map[id]);
    this.mesMasVentas = result.sort((a, b) => b.finalPrice - a.finalPrice)[0]
  }

  getMonth = (mes: number) => {
    let month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    return month[mes];
  }

  onLink = (slug: string) => this.router.navigate(['empresas', slug]);
}
