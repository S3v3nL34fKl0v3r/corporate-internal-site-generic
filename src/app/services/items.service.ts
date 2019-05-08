import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Item } from '../types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private afs: AngularFirestore
  ) { 
  }

  addItem(item: any) {
    item.createdAt = Date.now();
    item.createdBy = 'anonId';

    return this.afs.collection('items').add(item);
  }

  getItem(itemId: string): Observable<Item> {
    return this.afs.collection('items').doc(itemId)
      .snapshotChanges()
      .pipe(map(this.mapItems.bind(this)));
  }

  getItems(categoryId): Observable<Item[]> {
    return this.afs.collection('items', ref => {
      return ref.where('categoryId', '==', categoryId);
    })
      .snapshotChanges()
      .pipe (
        map(actions => {
          return _(actions)
            .map(this.mapItems.bind(this))
            .value();
        })
      );
  }

  mapItems(item): Item {
    const doc = item.payload.doc || item.payload;

    const data = doc.data();
    const id = doc.id;
    const exists = doc.exists;

    return { id, exists, ...data };
  }

  sanitize(incomingItem: Item): Item {
    let item = _.clone(incomingItem);
    return _.omit(item, ['exists', 'id']) as Item;
  }
}
