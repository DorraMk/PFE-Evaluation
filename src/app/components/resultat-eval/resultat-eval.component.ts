import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultatEval } from 'src/app/models/ResultatEval';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ResultatEvalService } from 'src/app/services/resultat-eval.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-resultat-eval',
  templateUrl: './resultat-eval.component.html',
  styleUrls: ['./resultat-eval.component.scss']
})
export class ResultatEvalComponent {
  currentUser: any;
  evaluations:ResultatEval[]=[];
  evaluationsD:ResultatEval[]=[];
  evalue!:string ; 
  evaluateur!:string ; 
  roles: string[] = [];
  testDirection!:boolean
  @ViewChild('downloadLink', { static: false }) downloadLink!: ElementRef;

  
  constructor( private formBuilder: FormBuilder,private route: ActivatedRoute, private resultatService: ResultatEvalService,private notifService:NotificationService ,
    private utilisateurService:UtilisateurService,private tokenStorage: TokenStorageService,private grilleService :GrilleEvalService,private router: Router) 
  {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
    }
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
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
            this.testDirection=true;
            this.listDirection();
          }
                      
        })
        
      })    
      this.roles = this.tokenStorage.getUser().roles;
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
        this.evalue=item.evalue; 
        console.log("collaborateur :",this.evalue);
        
       if(item.flgEval==true)
       this.evaluations.push(item);
      }
    
    })
  }


  
listDirection()
{
  this.resultatService.getListe().subscribe((data)=>
  {
 console.log("direction :", data);
 
    for (let item of data) {

      this.evalue=item.evalue; 
      this.evaluateur=item.evaluateur; 
      console.log(" evaluateur ",this.evaluateur);
      
     if(item.flgEval==true)
     this.evaluationsD.push(item);
    }
  
  })
}

  telecharger(evalId:number,evalue:string)
  {
    this.resultatService.getReport(evalId,evalue).subscribe(
      (data) => {
        const file = new Blob([data], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
       // Get the hidden anchor element from the template
       //const downloadLink = this.downloadLink.nativeElement;
       //downloadLink.href = fileURL;
 
       // Specify the desired file name (e.g., "custom_filename.pdf")
       //downloadLink.download = 'custom_filename.pdf';
 
       // Trigger a click event on the anchor to download the file
       //downloadLink.click();
 
      },
      (error) => {
        console.error("Error:", error);
      
      }
    );
  }
}
