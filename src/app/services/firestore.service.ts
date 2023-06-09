import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Family } from '../interfaces/family';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  getFamilies(): Observable<any> {
    const familiesProfileCollection = collection(this.firestore, 'families');
    return collectionData(familiesProfileCollection) as Observable<any>;
  }

  addFamily(setDoc: any) {
    addDoc(collection(this.firestore, 'families'), setDoc);
  }

  getFamily(name: string): Observable<any> {
    const familiesProfileCollection = query(
      collection(this.firestore, 'families'),
      where('name', '==', name)
    );

    return collectionData(familiesProfileCollection) as Observable<any>;
  }

  editFamily(name: string) {
    const familiesProfileCollection = query(
      collection(this.firestore, 'families'),
      where('name', '==', name)
    );
    // (familiesProfileCollection, { revision: [{ date: '13/05/23' }] });
    collectionData(familiesProfileCollection).subscribe((b) => console.log(b));
  }

  deleteFamily() {}
}
