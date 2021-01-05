import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresas } from 'src/app/shared/interfaces/empresas';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  items: Observable<Empresas[]>;

  constructor(
    private db: DataService
  ) { }

  ngOnInit(): void {
    let data: any = [];
    this.items = this.db.getEmpresas().pipe(
      map(actions => {
        return actions.map(a => {
            data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        });
      }),
      tap(res => {
        
      })
    );

    this.items.subscribe((res) => console.log(res));
  }

}
