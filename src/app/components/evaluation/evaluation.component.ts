import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterService, MessageService } from 'primeng/api';
import { ResultatEval } from 'src/app/models/ResultatEval';
import { ResultatEvalService } from 'src/app/services/resultat-eval.service';
import { SessionEvalService } from 'src/app/services/session-eval.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser: any;
  evaluations:ResultatEval[]=[];
  constructor( private resultatService: ResultatEvalService,private filterService: FilterService , private formBuilder: FormBuilder,
     private http:HttpClient,private router: Router,private messageService: MessageService, private tokenStorage: TokenStorageService,private utilisateurService:UtilisateurService){}
  
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
      this.isLoggedIn = true;
    }
    this.getByMat();
  }

  getByMat()
  {
    this.resultatService.getByEvaluateur(this.currentUser.usrMatricule).subscribe((data)=>
    {
      console.log("hello :",data);
      for (let item of data) {
        console.log(item.flgEval);
       if(item.flgEval==false)
       this.evaluations.push(item)
      }
    
    })
  }

  evaluate(id: number) {
    // Navigate to another component and pass the selected ID as a parameter
    console.log(id);
    
    this.router.navigate(['/faireEval', id]);
  }
  
}
