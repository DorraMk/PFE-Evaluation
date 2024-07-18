import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultatEval } from 'src/app/models/ResultatEval';
import { ResultatEvalService } from 'src/app/services/resultat-eval.service';
import { performTransform } from '../../util';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { TreeNode } from 'primeng/api';
import { Critere } from 'src/app/models/Critere';
import { error } from 'console';
import { NotificationService } from 'src/app/services/notification.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { resultatCritere } from 'src/app/models/resultatCritere';
import { Notification } from 'src/app/models/Notification';

interface Grille {
  critere: string;
  coef:number,
  //note:number
 
}


@Component({
  selector: 'app-faire-eval',
  templateUrl: './faire-eval.component.html',
  styleUrls: ['./faire-eval.component.scss']
})
export class FaireEvalComponent {
  selectedId!: number;
  Resultat!:ResultatEval;
  ResForm: FormGroup;
  resumeValue!: string;
  pointFortValue!: string;
  ameliorationValue!: string;
  objectifsValue!: string;


  evalue!:string;
  //files!: TreeNode[];
  //TabTheme:any[]=[]; 
  //tabCritere:any[]=[]; 
  //tabCriteree: any[] = [];
  critereForms: FormGroup[] = [];

val1:any;
val2:any;
val3:any;
val4:any;
val5:any;

  codeFonction!:number ;
  grille:Grille[]=[]; 
  currentUser: any;
  constructor( private formBuilder: FormBuilder,private route: ActivatedRoute, private resultatService: ResultatEvalService,private notifService:NotificationService ,
    private utilisateurService:UtilisateurService,private tokenStorage: TokenStorageService,private grilleService :GrilleEvalService,private router: Router) 
  {
     this.ResForm = this.formBuilder.group({
      resultat:['', Validators.required],
      resume: ['', Validators.required],
      amelioration: ['', Validators.required],
      pointFort: ['', Validators.required],
      objectifs: ['', Validators.required],
  
    }); 
  }

  ngOnInit():void {

    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
    }
    // Retrieve the selected ID from the route parameter
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.selectedId = +id;
      console.log(this.selectedId);
      
    } else {
      this.selectedId=0;
    }
    
    this.resultatService.getById(this.selectedId).subscribe((data:any)=>
    {
      console.log(data);
      this.Resultat=data;
      this.evalue=data.evalue;
      console.log(this.evalue);
      this.getFonction();
  
      
    })

  }

  
  
  
  TabTheme: any[] = []; // Initialize as empty array
  tabCritere: Critere[] = []; // Initialize as empty array

async getFonction() {
  try {
    const userData = await this.utilisateurService.getMat(this.evalue).toPromise();
    this.codeFonction = userData.codeFonction;

    const grilleData = await this.grilleService.getByFonction(userData.codeFonction).toPromise();
    const themeData = await this.grilleService.getThemesByGrille(grilleData.idGrille).toPromise();
    this.TabTheme = themeData instanceof Array ? themeData : [];
    console.log(this.TabTheme);

    for (const item of this.TabTheme) {
      console.log(item.idTheme);
      item.criteres = await this.fonction2(item.idTheme);
      //this.selectedRatings[item.IdCritere] = 0;
      // Initialize selectedRatings array for each theme
      this.selectedRatings.push(new Array(item.criteres.length).fill(0));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
nbcr!:number ;
async fonction2(idTheme: number):Promise<Critere[]> {
  try {
    const dataC = await this.grilleService.getCriteresByTheme(idTheme).toPromise();

    if (dataC) {
        // Calculate the sum of ponderations
    const sumPonderations = dataC.reduce((total, critere) => total + critere.ponderation, 0);

    this.nbcr = sumPonderations; // Assign the sum to nbcr
    console.log("Sum of ponderations:", this.nbcr);
      
      // Append the new data to the existing tabCritere array
      this.tabCritere = [...this.tabCritere, ...dataC];
      console.log(this.tabCritere);
      return dataC;
     
    } else {
      console.log(`No data found for idTheme: ${idTheme}`);
      return[];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return[];
  }
}

  

onSave(): void {
  // Loop through the critere array and collect selected values
  const evaluationData = this.tabCritere.map((critere, index) => {
    const formGroup = this.critereForms[index];
    return {
      critere: critere.titrecritere,
      Exceptionnel: formGroup.get('Exceptionnel')?.value,
      Bon: formGroup.get('Bon')?.value,
      Moyen: formGroup.get('Moyen')?.value,
      Besoin: formGroup.get('Besoin')?.value,
      Insatisfaisant: formGroup.get('Insatisfaisant')?.value,
    };
  });

  // You can now send the evaluationData to your server or process it as needed
  console.log(evaluationData);
}




resultatCriteres: resultatCritere[] = [];
setResultatCritere(critereId: number, rating: number): void {
  
 // const radioId = `radio-${rowIndex}-${rowIndex2}`;
//this.resultatCriteres=[]
  const critere: resultatCritere = {
    idcritere: critereId,
    matriculeEvalue: this.evalue,
    exceptionnel: false,
    bon: false,
    moyen: false,
    besoin: false,
    insatisfaisant: false
  };

  switch (rating) {
    case 5:
      critere.exceptionnel = true;
      break;
    case 4:
      critere.bon = true;
      break;
    case 3:
      critere.moyen = true;
      break;
    case 2:
      critere.besoin = true;
      break;
    case 1:
      critere.insatisfaisant = true;
      break;
    default:
   
  }


  this.resultatCriteres.push(critere);


  console.log(this.resultatCriteres);


 /*  this.critere.idCritere = critereId;
  this.critere.matriculeEvalue = this.evalue;

  switch (rating) {
    case 5:
      this.critere.excellent = true;
      this.critere.bon = false;
      this.critere.moyen = false;
      this.critere.besoin = false;
      this.critere.insatisfaisant = false;
      break;
    case 4:
      this.critere.excellent = false;
      this.critere.bon = true;
      this.critere.moyen = false;
      this.critere.besoin = false;
      this.critere.insatisfaisant = false;
      break;
    case 3:
      this.critere.excellent = false;
      this.critere.bon = false;
      this.critere.moyen = true;
      this.critere.besoin = false;
      this.critere.insatisfaisant = false;
      break;
    case 2:
      this.critere.excellent = false;
      this.critere.bon = false;
      this.critere.moyen = false;
      this.critere.besoin = true;
      this.critere.insatisfaisant = false;
      break;
    case 1:
      this.critere.excellent = false;
      this.critere.bon = false;
      this.critere.moyen = false;
      this.critere.besoin = false;
      this.critere.insatisfaisant = true;
      break;
    default:
     
  }

  // Now, you can use the critere object as needed, for example, sending it to your server.
  console.log(this.critere); */


}


//selectedRatings: { [key: number]: number } = {};
weightedAverage = 0;
selectedRatings: number[][] = [];
/* 
calculateWeightedAverage() {
  let totalWeightedSum = 0;
  let totalPonderation = 0;

  for (const critere of this.tabCritere) {
    const rowIndex = this.tabCritere.indexOf(critere);
    const rating = this.selectedRatings[rowIndex];

    if (rating) {
      totalWeightedSum += rating * critere.ponderation;
      totalPonderation += critere.ponderation;
    }
  }

  if (totalPonderation === 0) {
    this.weightedAverage = 0; // or any default value when there are no selected ratings
  } else {
    this.weightedAverage = (totalWeightedSum / totalPonderation);
    console.log(this.weightedAverage);
  }
} */


calculateWeightedAverage() {
  let totalWeightedSum: number = 0;
  let totalPonderation: number = 0;

  for (const theme of this.TabTheme) {
    for (const critere of theme.criteres) {
      
      const rowIndex: number = this.TabTheme.indexOf(theme);
      const columnIndex: number = theme.criteres.indexOf(critere);
      const rating: number = this.selectedRatings[rowIndex][columnIndex];

      if (rating) {
        totalWeightedSum += rating * critere.ponderation;
        totalPonderation += critere.ponderation;
      }
    }
  }

  if (totalPonderation === 0) {
    this.weightedAverage = 0; // or any default value when there are no selected ratings
  } else {
    this.weightedAverage = (totalWeightedSum / this.nbcr)*4;
    console.log(this.weightedAverage);
  }
}

notifs:Notification[]=[];
update()
{
  this.ResForm.controls['resume'].setValue(this.resumeValue);
  this.ResForm.controls['pointFort'].setValue(this.pointFortValue);
  this.ResForm.controls['amelioration'].setValue(this.ameliorationValue);
  this.ResForm.controls['objectifs'].setValue(this.objectifsValue);
  this.ResForm.controls['resultat'].setValue(this.weightedAverage)
  const formData = this.ResForm.value;
  this.resultatService.updateRes(this.selectedId,formData).subscribe((data)=>
  {
    console.log("gggggg",this.resultatCriteres);
    
    
    for(let item of this.resultatCriteres){
      this.resultatService.addResCritere(item).subscribe((data7)=>
      {console.log(data7);
      })
    }
    console.log("success !! ");

    this.notifService.getNotifByMa(this.currentUser.usrMatricule).subscribe((data) => {
      console.log(data);
     this.notifs=data ;
      this.notifs.forEach((notif :Notification)=>
        {
          this.notifService.Desactiver(notif.idNotif).subscribe((d:any)=>{

            console.log("Okiiiz",notif);
            
          })
              
        })

    this.router.navigate(['/resultat']);
        
  })
})
}


// Function to handle changes in the resume textarea
onResumeChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  this.ResForm.get('resume')?.setValue(target.value);
}

// Function to handle changes in the amelioration textarea
onAmeliorationChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  this.ResForm.get('amelioration')?.setValue(target.value);
}

// Function to handle changes in the pointFort textarea
onPointFortChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  this.ResForm.get('pointFort')?.setValue(target.value);
}

// Function to handle changes in the objectifs textarea
onObjectifsChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  this.ResForm.get('objectifs')?.setValue(target.value);
  console.log(" objectiif",target);
  
}


Cancel()
{
  this.ResForm.reset() ; 
  // Reset the radio buttons not part of the form group
  this.selectedRatings = new Array(this.tabCritere.length).fill(null); 
   // Reset the textarea values
   this.resumeValue = '';
   this.pointFortValue = '';
   this.ameliorationValue = '';
   this.objectifsValue = '';
}





/* calculateWeightedAverage() {
  let sumWeighted = 0;
  let totalPonderation = 0;

  for (const critere of this.tabCritere) {
    if (critere.ponderation && this.selectedRatings[critere.IdCritere]) {
      sumWeighted += this.selectedRatings[critere.IdCritere] * critere.ponderation;
      totalPonderation += critere.ponderation;
    }
  }

  console.log('Sum Weighted:', sumWeighted);
  console.log('Total Ponderation:', totalPonderation);

  this.weightedAverage = totalPonderation > 0 ? sumWeighted / totalPonderation : 0;
  console.log(this.weightedAverage);
  
}
 */

/* this.files = [];
            for(let i = 0; i < 50; i++) {

                let node = {
                    data:{  
                       name:item.titre
                    },
                    children: [
                        {
                            data: {
                              name:crit.titrecritere,
                              coef:crit.ponderation                  
                               
                            }
                        }
                    ]
                };
          
                this.files.push(node);
                console.log("nodeee ",node);
                
            }*/


        
}















