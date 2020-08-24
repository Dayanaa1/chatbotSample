import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

// this is here to discourage the instantianting of pusher any where its
// needed, better to reference it from one place
@Injectable()
export class PusherService {
private _pusher: any;

// constructor() {
//   this._pusher = new Pusher('APP_KEY', {
//     cluster: 'eu',
//     encrypted: true
//   });
// }


constructor() {
  this._pusher = new Pusher('cff97343a41a1b63b137', {
    cluster: 'ap2',
    encrypted: true
  });
}


getPusher() {
  return this._pusher;
}

}
