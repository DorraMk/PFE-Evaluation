import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Notification } from 'src/app/models/Notification';
import { LayoutService } from 'src/app/services/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  testdesactive=false;

  constructor(public layoutService: LayoutService,private notifService:NotificationService,
    private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router,
    private cdRef: ChangeDetectorRef,
    //private websocketService: WebsocketService
    ) { }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser: any;
  Notification:Notification=new Notification ;
  flgDes!:boolean
  badge:number=0; 
  notifications: string[] = [];
  notifs:Notification[]=[];
  notifs2:Notification[]=[];
 /*  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
      this.isLoggedIn = true;
      this.notifService.getNotifByMat(this.currentUser.usrMatricule).subscribe((data)=>
      {
        console.log(data);
       this.Notification=data;
        console.log(this.Notification.messageNotif);
         
        this.badge++; 
      }
      
      )
    }

  } */

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
      this.isLoggedIn = true;

     // this.websocketService.connect();

/*       this.websocketService.subscribeToTopic('/topic/notifications').subscribe((data:any) => {
        // Handle data received from the WebSocket server
        console.log('Received data from WebSocket:', data);
        this.notifications.push(data);
        // Perform your logic here
      },
      (error) => {
        console.error('WebSocket error:', error);
      }
      ); */
   


      this.notifService.getNotifByMa(this.currentUser.usrMatricule).subscribe((data) => {
        console.log(data);
        this.notifs=data ;
       /*  data.forEach((notf)=>
        {
          if (notf.desactiverAlerte=false)
          {
            this.notifs=data ;
            console.log("length ",this.notifs.length);
          }
        })
       */

       
       
        this.notifs.forEach((notif :Notification)=>
  {

      this.Notification = notif;
            console.log(this.Notification?.messageNotif);


            this.flgDes=notif.desactiverAlerte
            console.log("flaaag",this.flgDes);
            if(notif.desactiverAlerte==true)
            {
              this.testdesactive=true 
              this.notifs = this.notifs.filter(notification => !notification.desactiverAlerte);
            //this.notifs=[]
            
            } else 
            {
              this.testdesactive=false
              this.badge++;
            }
         

         
  }) 
        

     
      }
      ,
  (error) => {
    console.error("Error fetching notification:", error);
  }
      );
    }

    console.log(this.badge);
    console.log("ttttttessst",this.testdesactive);
    
    
  }




  signOut(): void {
    new Promise<void>((resolve, reject) => {
      try {
        window.sessionStorage.clear();
        resolve();
      } catch (error) {
        reject(error);
      }
    }).then(() => {
      // Actions to perform after successful sign out
      console.log("Sign out successful");
    }).catch(error => {
      // Handle error if any
      console.error("Sign out error:", error);
    });
  }
  
}
