import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {}

  // Establish a connection to the WebSocket server
  connect() {
    this.socket.connect();
  }

  // Subscribe to a specific topic (e.g., "/topic/notifications")
  subscribeToTopic(topic: string) {
    return this.socket.fromEvent(topic);
  }
}
