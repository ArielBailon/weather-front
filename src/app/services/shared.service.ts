import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();

  constructor() { }

  // Sets next message to shared to any component to show or hide today's weather param
  nextMessage(message: string) {
    this.message.next(message)
  }

}
