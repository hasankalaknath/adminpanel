import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private db: AngularFireDatabase) { }

  public addDangerLocation(lat: number, long: number, rules: string) {
    console.log("error" + lat + long + rules);
    const chatName = {
      latitude: long,
      longitude: lat,
      rule: rules
    }
    // this.db.collection('DangerousArea/MyCity').add(chatName);
    this.db.list('/DangerousArea/MyCity').push(chatName);
    // this.firestore.collection('DangerousArea').child('x').add(chatName);
    // this.firestore.list('/DangerousArea/MyCity').valueChanges();

  }
}
