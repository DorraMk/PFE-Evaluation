import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any = {
    usrMatricule:null,
    password:null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser: any;
  constructor(private authService: AuthService, 
    private utilisateurService: UtilisateurService ,
    private grilleService: GrilleEvalService,
     private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
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
            
          } else 
          {
            console.log("direction");
            
          }
          
          
        })
        
      })    
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { usrMatricule, password } = this.form;
console.log(password);
console.log(usrMatricule);


    this.authService.login(usrMatricule, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
       
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['dashboard']);
      },
      err => {
        console.log(usrMatricule, "kk ", password);
        
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("non" , this.errorMessage);
        
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
