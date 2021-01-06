import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private empresas$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private fs: AngularFirestore) { }

  setEmpresas$  = (items: any) => this.empresas$.next(items);
  getEmpresas$  = (): Observable<any> => this.empresas$.asObservable();

  getEmpresas = () => this.fs.collection('sales').snapshotChanges();
  getEmpresaId = (id: string) => this.fs.collection('sales').doc(id).valueChanges();
  getEmpresaSlug = (slug: string) => this.fs.collection('sales', ref => ref.where('slug', '==', slug)).valueChanges();
}
