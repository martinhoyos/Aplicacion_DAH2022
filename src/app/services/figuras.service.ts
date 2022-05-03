import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Figuras } from '../models/figuras';

@Injectable({
  providedIn: 'root'
})
export class FigurasService {

  constructor(private firestore:AngularFirestore) { }

  registerUnit(unidad:Figuras, escuadra:string){
    return this.firestore.collection(escuadra).add(unidad);
  }
}
