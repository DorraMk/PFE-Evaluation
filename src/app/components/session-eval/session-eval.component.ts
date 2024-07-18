import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmEventType, ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { SessionEval } from 'src/app/models/SessionEval';
import { SessionEvalService } from 'src/app/services/session-eval.service';
import { FilterService } from 'primeng/api';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { log } from 'console';
import { Rhnom } from 'src/app/models/rhnom';
import { GrilleEval } from 'src/app/models/GrilleEval';

@Component({
  selector: 'app-session-eval',
  templateUrl: './session-eval.component.html',
  styleUrls: ['./session-eval.component.scss']
})
export class SessionEvalComponent {

  sessionForm: FormGroup;
  Formcat:FormGroup
  searchKey!: string;
  id!:number
  Message!:string
  Populations!:[];
  Evaluateurs!:any[];
  catEv!:[];
  catPop!:[];
  session!:SessionEval;
  categoriess!:Rhnom[];
  displayDialogSessionmod:boolean=false;
  ancienneSession!:SessionEval;
  SessionSelected:boolean=false;
  sessions!:any[]
  contrats:Rhnom[]=[]
  loading: boolean = true;
  lib1!:string;
  items: MenuItem[];
  displayDialog: boolean = false;
  displayDialog2: boolean = false;
  idSessionAmodifier!:number; 
  selectedCategory: any;
  selectedCategory2:any
  catIdSelected!:number 
  catIdSelected2!:number 
  selectedSessionEvaluators: any[] = [];
  checked: boolean = false;
  Rhnomm!: Rhnom[];
  SupHier:boolean=false;
  collegue:boolean=false;
  collaborateur:boolean=false;
  soimeme:boolean=false;
  nbToggle:number=0;
  contratsTrouve!:Rhnom[] ;
  contratTrouve!:Rhnom;
  declenchementValues!: string[];
  Evals:String="" ;
  selectedDeclenchement!: string;

constructor( private grilleService: GrilleEvalService,private filterService: FilterService , 
  private confirmationService: ConfirmationService,
  private formBuilder: FormBuilder,private sessionService: SessionEvalService, private http:HttpClient,private messageService: MessageService){
  
  
  this.sessionForm = this.formBuilder.group({
    titre: ['', Validators.required],
    dateFin:  new FormControl<Date | null>(null),
    dateLancement: new FormControl('', Validators.required),
    periode: new FormControl('', Validators.required),
    declenchement:['', Validators.required],
  });

  this.Formcat = this.formBuilder.group({
    populations: ['', Validators.required],
    contrat: ['', Validators.required],
  }); 

  this.items = [
    {
        label: 'Lancer',
        icon: 'pi pi-refresh',
        command:()=>
          {
            this.lancer();
          }
    }
];
}


ngOnInit() {

   this.Evaluateurs = [
    { name: 'Supérieur Hierarchique', coefficient: 0 ,toggleButtonState:false},
    { name: 'Collégues', coefficient: 0,toggleButtonState:false},
    { name: 'Collaborateurs', coefficient: 0 ,toggleButtonState:false},
    { name: 'Soi-même', coefficient: 0,toggleButtonState:false }
  ];
  
    this.loadSessions();
    this.loadCategories();
    this.loadContrat();
    this.loadDeclenchement();
    this.getGrilles();
    //this.getEvaluateursList();
}


loadDeclenchement()
{
  this.sessionService.getDeclenchement().subscribe((data)=>
  {
    this.declenchementValues=data; 
    console.log("declenchement ! ",this.declenchementValues);
    
  })
}
showFieldPeriode:boolean=false; 
showFieldDate:boolean=false; 
onDeclenchementChange(event: any) {
  const selectedValue = event.value;
  if (selectedValue === 'SelonDateDanniversaire') {
    this.showFieldPeriode = true;
    this.showFieldDate=false;
  } else if(selectedValue === 'Annuelle'){
    this.showFieldDate = true;
    this.showFieldPeriode=false;
  }
}

grilles: GrilleEval[]=[]  

getGrilles(){
  this.grilleService.getAllGrilles().subscribe(data=>
    {
      this.grilles=data;
      
    })
}

test!:boolean



testCoef!:boolean;

public updateCoefficient(evaluateur: any): void {
  console.log("tooooglleee ",this.countActiveToggleButtons());
  
  this.testCoef=false ; 
  evaluateur.toggleButtonState = evaluateur.toggleButtonState === true ? false : true;
  if(evaluateur.coefficient>0)
  {
    evaluateur.coefficient=0;
  }

  if(this.countActiveToggleButtons()==1){
    for(let item of this.Evaluateurs){
      if(item.toggleButtonState){
      item.coefficient=1;
      this.Evals=item.name;
      //this.Evals.push(item.name);
      console.log(this.Evals);
      
      }
      else
      {
        //this.Evals="";
       // console.log(this.Evals);
      }
    }
  }else if(this.countActiveToggleButtons()>1){

    //this.Evals=[]
    this.testCoef=true ; 
    this.Evals=""
    console.log("2222222222");

    for(let item of this.Evaluateurs){
      if(item.toggleButtonState){
        switch (item.name) {
          case 'Supérieur Hierarchique':
            item.coefficient = 3 ;
            this.Evals+=item.name
            //this.Evals.push(item.name);
            console.log(this.Evals);
            break;
          case 'Collégues':
            item.coefficient =2 ;
            this.Evals+=","+item.name
            //this.Evals.push(item.name);
            console.log(this.Evals);          break;
            case 'Collaborateurs':
              item.coefficient = 1.5 ; 
              this.Evals+=","+item.name
              //this.Evals.push(item.name);
              console.log(this.Evals);           break;
              case 'Soi-même':
                item.coefficient = 1 ; 
                this.Evals+=","+item.name 
               // this.Evals.push(item.name);
                console.log(this.Evals);          break;
          default:1
            break;
        }
      }
    
      
    }
  }
  else{
    console.log("3333");

    for(let item of this.Evaluateurs){
      item.coefficient =0;

    }

  }
}

public countActiveToggleButtons(): number {
  let count = 0;
  for (const evaluateur of this.Evaluateurs) {
    if (evaluateur.toggleButtonState) {
      count++;
    }
  }
  return count;
}


loadSessions()
{
  
 this.sessionService.getAllSessions().subscribe((data) => {
  this.sessions=data;
  console.log(data);
  
  this.sessions.forEach((session: any | null)=>
  {
    if (session!=null)
    {
      
      this.session=session;
     this.id=session.idSession;
       //this.getPopulation(this.id)
    //this.sessionService.Verifier(this.id).subscribe((data)=>{})
    }
  })
  this.loading = false;  
 

 // console.log(this.sessions)
  });
}



update() {
  const sessData=this.sessionForm.value;
  this.sessionService.modifSession(this.id,sessData).subscribe(data=>
    {
      console.log("avec succes");
      console.log("new one : ",data);
      this.Message="Modifiée avec succés !"
      this.showSuccess

    })
  
}

selectedSession: any; 



lancer()
{
  
  this.sessionService.Verifierman(this.idSessionAmodifier).subscribe(data=>
    {
      console.log("lancement  :",data);
      this.Message="Lancée avec succés !"
      this.showSuccess()
      
    })
}


showDialog() {
  this.displayDialog = true;
  
}
selectedContrats: any[] = [];
selectedCategorie: any[] = [];
onContratsChange(selectedValues: Rhnom[])
{
 
    this.selectedContrats = selectedValues;
    console.log(this.selectedContrats);
    
}
onCategorieChange(selectedValues: any[])
{
 
    this.selectedCategorie = selectedValues;
    console.log(this.selectedCategorie);

    this.test=false; 
    selectedValues.forEach((selectedCategory)=>
    {
    this.grilles.forEach((grille:GrilleEval)=>
    {
     
      
            if(grille.fonction==selectedCategory.idnom)
            {
             
              this.test= true; 
              console.log("fonction : ",grille.fonction,"selected : ",selectedCategory.idnom);
               
            }
       
           
    })
  })
    console.log(this.test);
}

onSubmitt() {
  if ((this.countActiveToggleButtons() > 0)&&(this.sessionForm.valid)||(this.Formcat.valid)) {
    const sessionData = this.sessionForm.value;

    // Step 1: Create the session
    this.sessionService.createSession(sessionData).subscribe(
      (sessionResponse: any) => {
        console.log("Step 1: Create Session - Success", sessionResponse.idSession);
        sessionData.evals = this.Evals;
        // Step 2: Add session details
        this.sessionService.modifSessionn(sessionResponse.idSession ,sessionData).subscribe(
          (sessionDetailsResponse: any) => {
            console.log("Step 2: Add Session Details - Success", sessionDetailsResponse);

            // Step 3: Update contracts
            for (let item1 of this.selectedContrats) {
              this.sessionService.ContratSession2(item1.idnom, sessionResponse.idSession).subscribe(
                (contratResponse: any) => {
                  console.log("Step 3: Update Contracts - Success", contratResponse);
                },
                (contratError: any) => {
                  console.error("Step 3: Update Contracts - Error", contratError);
                }
              );
            }

            // Step 4: Update functions
            for (let item2 of this.selectedCategorie) {
              this.sessionService.FonctionSession2(item2.idnom, sessionResponse.idSession).subscribe(
                (fonctionResponse: any) => {
                  console.log("Step 4: Update Functions - Success", fonctionResponse);
                },
                (fonctionError: any) => {
                  console.error("Step 4: Update Functions - Error", fonctionError);
                }
              );
            }

            // Reset form and load sessions after all steps are completed
            this.displayDialog=false ; 
            this.loadSessions();
            this.sessionForm.reset();
            this.Formcat.reset();
          },
          (sessionDetailsError: any) => {
            console.error("Step 2: Add Session Details - Error", sessionDetailsError);
          }
        );
      },
      (sessionError: any) => {
        console.error("Step 1: Create Session - Error", sessionError);
      }
    );
  } else {
    this.Message = "Il faut remplir tous les champs et choisir au moins un evaluateur !";
    this.showError();
  }
}
 







onSubmit() {
  console.log("aaaa",this.countActiveToggleButtons());
  
 if (this.countActiveToggleButtons()>0) {
    const Data = this.sessionForm.value;
    
    
  this.sessionService.createSession(this.sessionForm.value).subscribe(
    (data:any) => {
         console.log("etape 1 session  : success ",data.idSession);
         data.evals=this.Evals;
    
         
         this.http.post('http://localhost:8088/evaluation/session/ajoutSession', data).subscribe((dataS)=>
         {
          console.log("etape 2 session  : success ", dataS);
          
         })
         
           for(let item1 of this.selectedContrats){
            item1.sessionEvalContrat=data.idSession;
           this.sessionService.ContratSession(item1.idnom , item1).subscribe(
            (data: any) => {
              console.log("etape 3 contrats   : success ", data);
              
            }) 
          }
           for(let item2 of this.selectedCategorie){
            item2.sessionEval=data.idSession;
          
           this.sessionService.FonctionSession(item2.idnom , item2).subscribe(
            (data: any) => {
              console.log("etape 4 fonction  : success ", data);
              
            }) 
          } 
          
       
         // this.displayDialog=false ; 
          this.loadSessions();
          this.sessionForm.reset();
          this.Formcat.reset(); 

    });
    
 
}else 
{this.Message="Il faut remplir tous les champs et choisir au moins un evaluateur !";
this.showError();
}

}



loadCategories() {
  this.grilleService.getCat().subscribe((data :any[]) => {
   this.Rhnomm=data;
   console.log("data cat",data);
   
 
  });
}

showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: this.Message });
} 
loadContrat()
{
  this.sessionService.getContrat().subscribe((data)=>
  {
    this.contrats=data ;
    console.log("contrats ",data);
  })
}

onCategorySelectedd(event: any) {
  this.selectedCategory = event.value;
  const parts=this.selectedCategory.split(",");
  let cat=parts[0];
  let catId= Number(parts[1].trim());
  console.log(" id ",catId);
  this.catIdSelected=catId
  
}
onCategorySelectedd2(event: any) {
  this.selectedCategory2 = event.value;
  const parts=this.selectedCategory2.split(",");
  let cat=parts[0];
  let catId= Number(parts[1].trim());
  console.log(" population ",catId);
  this.catIdSelected2=catId
  
}



reloadPage(){
  window.location.reload()
}
showSuccess() {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: this.Message });
}


getPopulation(ids:number):any[]
{
  this.sessionService.getPop(ids).subscribe(data=>
    {
    this.Populations=data;
    console.log("Populations :",this.Populations);
    

    })
    return this.Populations
}

getEvaluateurs(ids:number):any[]
{
  this.sessionService.getEv(ids).subscribe(data=>
    {
      this.Evaluateurs=data;
      console.log("testt ",this.Evaluateurs);
      
    })
    return this.Evaluateurs
}



ModifierSession(idS:number)
{
console.log(idS);
this.idSessionAmodifier=idS;
this.sessionService.Desactiver(this.idSessionAmodifier).subscribe((data)=>
{
  console.log(data);
  this.loadSessions();
})

}

getSessionById()
{
   
 this.sessionService.getSession(this.idSessionAmodifier).subscribe(data=>
  {
   
    this.ancienneSession=data;
    console.log("test session id ",data);
    
    this.sessionForm.patchValue({
      titre:this.ancienneSession.titre,
      dateDebut: this.ancienneSession.dateDebut,
      dateFin: this.ancienneSession.dateFin,
      dateLancement: this.ancienneSession.dateLancement, 
      
      
    });
  });
} 









loadcatEv(id:number)
{
  this.sessionService.getEv(id).subscribe(data=>{
    console.log("categorie modif ",data);
    this.catEv=data;
    
  })
}


loadPop(id:number)
{
  this.sessionService.getPop(id).subscribe(data=>
    {
      console.log(data);
      this.catPop=data;
      
    })
}



onSessionSelected(sessionId: number) {
console.log("kkkkkkkkkkkk ",sessionId);

  this.loadcatEv(sessionId);
}



onSessionSelectedd(sessionId: number) {

  this.loadPop(sessionId);
}



get sessinonFormControls() {
  return this.sessionForm.controls;
}

get catFormControls() {
  return this.Formcat.controls;
}
sessionToDelete: any; 
showConfirmation(sessionId: any) {
  this.sessionToDelete = { idSession: sessionId };
  this.confirmationService.confirm({
    message: 'Voulez vous vraiment désactiver la session ?',
  });
}

applyDesactiver() {
  // Apply your "Desactiver" logic here
  this.ModifierSession(this.sessionToDelete.idSession);
  this.sessionToDelete = null; // Clear the sessionToDelete property
}

cancelDesactiver() {
  // Handle cancel action here
  this.sessionToDelete = null; // Clear the sessionToDelete property
}

confirm2() {
  this.confirmationService.confirm({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
    },
    reject: (type: ConfirmEventType) => { // Specify the type here
      switch (type) {
        case ConfirmEventType.REJECT:
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
          break;
        case ConfirmEventType.CANCEL:
          this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
          break;
      }
    }
  });
}

}
