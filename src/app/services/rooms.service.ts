import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface rooms {
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private roomsCollection: AngularFirestoreCollection<rooms>;

  private rooms: Observable<rooms[]>;

  constructor(db: AngularFirestore) {
    this.roomsCollection = db.collection<rooms>('Rooms');

    this.rooms = this.roomsCollection.snapshotChanges().pipe(
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

  getTodos() {
    return this.rooms;
  }
}

//update_selection ( rooms){
//this.firestore.doc (this.collectionName + '/' + recordID).update(record);

//}
