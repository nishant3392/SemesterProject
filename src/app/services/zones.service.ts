import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface zones {
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  private zoneCollection: AngularFirestoreCollection<zones>;

  private zones: Observable<zones[]>;

  constructor(db: AngularFirestore) {
    this.zoneCollection = db.collection<zones>('Zones');

    this.zones = this.zoneCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          console.log('Action', a);
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getZones() {
    return this.zones;
  }
}