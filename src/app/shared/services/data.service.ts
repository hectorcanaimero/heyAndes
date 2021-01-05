import { Empresas } from './../interfaces/empresas';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private fs: AngularFirestore) { }

  getEmpresas = () => this.fs.collection('sales').snapshotChanges();
}
