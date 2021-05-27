import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})

export class SelectionPage implements OnInit {
 
  private itemsCollection: AngularFirestoreCollection;
  rooms: any;
    constructor (private afs: AngularFirestore) {
     //  this.itemsCollection = afs.collection('rooms');
     // this.items = this.itemsCollection.valueChanges();
  
  
    }
  
    ngOnInit(): void {
      const collectionRef = this.afs.collection('rooms');
      const collectionInstance = collectionRef.valueChanges();
      collectionInstance.subscribe(ss => {
        this.rooms = ss[0]['Rooms'];
      });
    }
  
  }