import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Auto } from '../interfaces/auto';

@Injectable({ providedIn: 'root' })
export class AutosService {
  constructor(private firestore: Firestore) {}

  obtenerAutos(): Observable<Auto[]> {
    const autosRef = collection(this.firestore, 'autos');
    return collectionData(autosRef, { idField: 'id' }) as Observable<Auto[]>;
  }

  obtenerAutoPorId(id: string): Observable<Auto> {
    const autoRef = doc(this.firestore, `autos/${id}`);
    return docData(autoRef, { idField: 'id' }) as Observable<Auto>;
  }
}
