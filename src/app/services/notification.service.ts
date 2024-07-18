import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Notification } from '../models/Notification';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient,
  //  private socket: Socket
    ) { }

 /*  getNotifByMat(mat:any): Observable<any[]>{
    const  url=`http://localhost:8088/evaluation/notif/getByMat/${mat}`;
    return this.http.get<any[]>(url,mat);
   } */
  
   getNotifByMa(mat:any):Observable<Notification[]>
   {
     const url=`http://localhost:8088/evaluation/notif/getByMat/${mat}`;
     return this.http.get<Notification[]>(url)
     
   }  
   Desactiver(id:number):Observable<any>
   {
     const url=`http://localhost:8088/evaluation/notif/desactiver/${id}`
     return this.http.put<void>(url,{}); 
   } 
   // Subscribe to the WebSocket notifications topic
   
  subscribeToNotifications() {
    //return this.socket.fromEvent('/topic/notifications');
}

}
