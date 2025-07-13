import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, addDoc, Firestore } from '@angular/fire/firestore';
import { Auto } from '../interfaces/auto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  constructor(private firestore: Firestore) {}

  agregarAuto(auto: Auto) {
    const autosRef = collection(this.firestore, 'autos');
    return addDoc(autosRef, auto);
  }

  obtenerAutos(): Observable<Auto[]> {
    const autosRef = collection(this.firestore, 'autos');
    return collectionData(autosRef, { idField: 'id' }) as Observable<Auto[]>;
  }

  obtenerAutoPorId(id: string): Observable<Auto | undefined> {
    const autoRef = doc(this.firestore, 'autos', id);
    return docData(autoRef).pipe(
      map(data => ({ id, ...data } as Auto))
    );
  }
}
