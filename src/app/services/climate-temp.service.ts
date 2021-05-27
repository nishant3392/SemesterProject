import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface temp {}

@Injectable({
  providedIn: 'root',
})
export class ClimateTempService {
  private climateTemp: AngularFirestoreCollection<temp>;

  private temps: Observable<temp[]>;
  data: [];
  constructor(firestore: AngularFirestore) {
    this.climateTemp = firestore.collection('select-climate-temp');

    this.temps = this.climateTemp.snapshotChanges().pipe(
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

  getTemp() {
    return this.temps;
  }
}
