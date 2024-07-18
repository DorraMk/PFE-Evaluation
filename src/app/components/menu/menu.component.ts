import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  modelDirection: any[] = [];
  modelUtilisateur: any[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser: any;
  testDirection!:boolean
    constructor(public layoutService: LayoutService,private authService: AuthService, 
        private utilisateurService: UtilisateurService ,
        private grilleService: GrilleEvalService,
         private tokenStorage: TokenStorageService,private router: Router) { }
   
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.currentUser = this.tokenStorage.getUser();
            this.isLoggedIn = true;
            console.log("is logged in" , this.currentUser);
            this.utilisateurService.getMat(this.currentUser.usrMatricule).subscribe((data)=>
            {
              console.log("utilisateur connecté ",data.codeFonction);
              this.grilleService.GetDirection().subscribe((data2)=>{
                console.log("Direction :",data2.idnom);
                if(data.codeFonction!=data2.idnom)
                {
                  console.log("Utilisateur aady");
                  this.testDirection=false
                  
                } else 
                {
                  console.log("direction");
                  this.testDirection=true
                }
                
                
              })
              
            })    
            this.roles = this.tokenStorage.getUser().roles;
          }

        this.modelDirection = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/dashboard'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: "Grille d'évaluation", icon: 'pi pi-fw pi-file', routerLink: ['grille'] },
                    {label : "Session d'évaluation", icon :'pi pi-fw pi-globe', routerLink :['session']},
                    {label : "Evaluations", icon :'pi pi-fw pi-calendar', routerLink :['evaluation']},
                    {label : "Résultats Evaluations", icon :'pi pi-fw pi-book', routerLink :['resultat']},
                 
                ]
            }
        ];








        this.modelUtilisateur = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/dashboard'] }
                ]
            },
            {
                label: 'UI Components',
                items: [

                    {label : "Evaluations", icon :'pi pi-fw pi-calendar', routerLink :['evaluation']},
                    {label : "Résultats Evaluations", icon :'pi pi-fw pi-book', routerLink :['resultat']},
                  
                
                ]
            }
        ];
    }
}
