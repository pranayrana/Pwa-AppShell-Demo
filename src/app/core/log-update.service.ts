import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class LogUpdateService {

  constructor(private swUpdate: SwUpdate) { 
    swUpdate.available.subscribe(ev=>{
      console.log('current version is', ev.current);
      console.log('available version is', ev.available);

      swUpdate.activateUpdate().then(() => document.location.reload());
    });

    swUpdate.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    swUpdate.unrecoverable.subscribe(event => {
      alert('loading update');
      console.log(
        `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
        'Please reload the page.');
    });

    
  }

}
