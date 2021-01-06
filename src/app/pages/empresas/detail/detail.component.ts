import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { DataService } from './../../../shared/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  title: string = '';
  slug: Observable<string>;
  items: Observable<any[]>;

  constructor(
    private router: Router,
    private db: DataService,
    private activated: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.slug = this.activated.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe((res) => this.getEmpresa(res));
  }

  getEmpresa = (slug: string) => {
    this.items = this.db.getEmpresaSlug(slug).pipe(tap((res) => this.title = res[0].nameAgency));
  }

  onBack = () => this.router.navigate(['empresas']);
}
