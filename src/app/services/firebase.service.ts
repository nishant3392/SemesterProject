import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Votes';

  constructor(private firestore: AngularFirestore) {}

  create_Vote(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_Votes() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_Vote(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_Vote(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
