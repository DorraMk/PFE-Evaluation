import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { MenuItem, Message, MessageService, SelectItem, TreeNode } from 'primeng/api';
import { Critere } from 'src/app/models/Critere';
import { Themes } from 'src/app/models/Themes';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
import { Rhnom } from 'src/app/models/rhnom';
import { GrilleEval } from 'src/app/models/GrilleEval';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable, forkJoin, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-grille-eval',
  templateUrl: './grille-eval.component.html',
  styleUrls: ['./grille-eval.component.css'],
  template: `
      <input type="text" formControlName="titre" [(ngModel)]="titre" />
  `,
})



export class GrilleEvalComponent {
  themeForm: FormGroup;
  critereForm:FormGroup;
  Formcat:FormGroup;
  grilleForm!:FormGroup;
  categories!: SelectItem[];
  criteres!:Critere[];
  criteresByTheme:Critere[]=[];
  theme:Themes=new Themes;
  critere!:Critere;
  idTheme!:number;
  idCritere!:number; 
  Themes: Themes[] = [];
  Themes2: Themes[] = [];
  grilles: GrilleEval[]=[] 
  displayDialog: boolean = false;
  displayDialog2: boolean = false;
  displayDialogGrille:boolean=false;
  displayDialogGrillemod:boolean=false;
  displayDialogThememod:boolean=false;
  displayDialogCriteremod:boolean=false;
  IdThemeAAjouter!:number;
  displayCritermod:boolean=false;
  selectedCategorie!: string;
  categoriess!:string[];
  Rhnomm!:Rhnom[];
  categories2!:String[];
  ThemeIsAdded:boolean=false; 
  categoriesLoaded = false;
  items!: MenuItem[];
  catId!:number;
  catnom!:any[]; selectedTheme !:Themes;
  Message!:string
  expandedThemes: any[] = [];
  selectedCategoryId: number | null = null;
  Id!:number 
  critereIsAdded:boolean=false;
  ListCategoriesiD:number[]=[]
  IdGrilleAmodifier!:number;
  IdThemeAmodifier!:number;
  IdCritereAmodifier!:number;
  ancienneGrille!:GrilleEval;
  ancienTheme !:Themes;
  ancienneCritere!:Critere;
  GrilleSelected:boolean=false;
  ThemeSelected:boolean=false; 
  CritereSelected:boolean=false;
  champsList: Critere[] = [];

  formData:Themes[]=[] //
  formData2:Themes[]=[] 
  lib1Value!:String
  tabCatId:number[]=[]
  tabThemeId:number[]=[]
  nomFonction!:string; 
  idFonction!:number
  showMessage=false;
  ancienTitreTheme!:string;
  ancienthemeId!:number;
  messages!: Message[];
  showListeGrillesPanel: boolean = false;
  currentUser: any;
  roles: string[] = [];
  activeIndex: number = 0;
  constructor(
  private formBuilder: FormBuilder,
  private grilleService: GrilleEvalService, private http:HttpClient,private messageService: MessageService,
  private authService: AuthService, private tokenStorage: TokenStorageService)
  {
    this.themeForm = this.formBuilder.group({
      titre: ['', Validators.required],
   
 
    });
     this.Formcat = this.formBuilder.group({
      categorie: ['', Validators.required],
 
    }); 
    this.critereForm = this.formBuilder.group({
      titrecritere: ['', Validators.required],
      ponderation: ['']
    });

    this.grilleForm = this.formBuilder.group({
      titreG: ['', Validators.required],
      fonction:['', Validators.required],
 
    });  

  }
  ngOnInit() {
 
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
      console.log("is logged in" , this.roles);
      this.roles = this.tokenStorage.getUser().roles;
      //this.loadCategories();
    }
  
    this.Formcat = new FormGroup({
      categorie: new FormControl()
    });

 
    this.loadCategories();
    this.getGrilles()
  
    this.messages = [
   
      { severity: 'warn', summary: 'Warning', detail: 'Il faut choisir une categorie non existante dans les autres grilled' },
  ];
   
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.Message });
    }
    showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.Message });
    }

    showWarning() {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: this.Message });
    }
fct()
{
 console.log("contenuuuu ",this.themeForm.get("titre"))
}

getGrilles(){
  this.grilleService.getAllGrilles().subscribe(data=>
    {
      this.grilles=data
      console.log(data);
      
    })
}


  loadCategories() {
    this.grilleService.getCat().subscribe((data :any[]) => {
      
      this.categoriess=data;
      //this.categories2=data
     this.Rhnomm=data;
     console.log("data cat",data);
     
    this.categoriesLoaded = true;
    });
  }

catSel=false
 test!:boolean
  onCategorySelected(selectedCategory:any) {
this.test=false; 
  
  this.grilles.forEach((grille:GrilleEval)=>
  {

          if(grille.fonction==selectedCategory)
          {
           
            this.test= true; 
            console.log("fonction : ",grille.fonction,"selected : ",selectedCategory);
             
          }
         

         
  })
  console.log(this.test);
  }

  VerficationCategorie():boolean
  {
    // let test=false
    this.grilles.forEach((grille:GrilleEval)=>
    {
         

            if(grille.fonction==this.grilleForm.get('fonction')?.value)
            {
             
              return true;
            }
            else return false
    })
    return false;
  }




  

selectedOption!: string;
panelCollapsed = false;
champTheme :Themes={} as Themes;

onSubmit() {

  
    if (this.themeForm.valid) {
    const themeData = this.themeForm.value;
    this.champTheme.titre= this.themeForm.get('titre')?.value; 
    this.formData.push({...this.champTheme});
    this.themeForm.reset();
    this.ThemeIsAdded=true;
    if (this.champsList.length ===1)
    {
      console.log(this.champsList.length);
        this.first = true;

        this.Message="Si il n'y a qu'un seul critére , la ponderation sera automatiquement mise à 1";
        this.showWarning();
        this.champsList[0].ponderation=1;
        this.grilleService.addTheme(themeData).subscribe(
          (data: any) => {
            console.log("idtheme: ", data.idTheme);
            let theme={} as Themes;
            theme.IdTheme=data.idTheme;
            theme.titre=data.titre;      
            this.ThemeIsAdded=true;
            this.tabThemeId.push(data.idTheme)
            this.formData2.push(theme);
            console.log("themeid ",this.formData2);
            this.panelCollapsed = true;
          
            for(let item of this.champsList){
              item.theme=data.idTheme;
              this.grilleService.createCritere(this.champsList[0]).subscribe(
                (data:any) => {
        
                  console.log('criteres ajouté avec succès !');
                  console.log("critere: ",data);
                
                
                 this.tabCatId.push(data.idCritere)
                  console.log(this.tabCatId);
                  this.critereForm.reset();
                
                },
                (error) => {
                  // Gestion des erreurs
                  console.error('Erreur lors de l\'ajout du critere :', error);
                }
              );
            }
            this.themeForm.reset();
            this.champsList=[];
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du thème :', error);
          }
        );
    }
    else {
   
    this.grilleService.addTheme(themeData).subscribe(
      (data: any) => {
        console.log("trah");
        let theme={} as Themes;
        theme.IdTheme=data.idTheme;
        theme.titre=data.titre;      
        this.ThemeIsAdded=true;
        this.tabThemeId.push(data.idTheme)
        this.formData2.push(theme);
        console.log("themeid tableau ",this.tabThemeId);
        this.panelCollapsed = true;
      
        for(let item of this.champsList){
          item.theme=data.idTheme;
          this.grilleService.createCritere(item).subscribe(
            (data:any) => {
    
              console.log('criteres ajouté avec succès !');
              console.log("critere: ",data);
            
            
             this.tabCatId.push(data.idCritere)
              console.log(this.tabCatId);
              this.critereForm.reset();
            
            },
            (error) => {
              // Gestion des erreurs
              console.error('Erreur lors de l\'ajout du critere :', error);
            }
          );
        }
        this.themeForm.reset();
        this.champsList=[];
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du thème :', error);
      }
    );
    }
  }
  console.log(this.champsList.length);
}





  
champ :Critere={} as Critere;

/*   onSubmitc() {
   

    const titreCritere = this.critereForm.get('titrecritere')?.value;
    const ponderation = this.critereForm.get('ponderation')?.value;
 
    this.champ.ponderation=this.critereForm.get('ponderation')?.value;
    this.champ.titrecritere= this.critereForm.get('titrecritere')?.value;    
    this.champsList.push({...this.champ});
    this.critereForm.reset();
  this.critereIsAdded=true

    
  } */

  first: boolean = false; // Initialize first as false

onSubmitc() {
  if (this.critereForm.valid)
  {
  const titreCritere = this.critereForm.get('titrecritere')?.value;

  // Check if champsList is empty
   
   // this.first = true; // Set first to true when champsList is empty
   // this.champ.ponderation = 1; // Set to 1 as default
 
    this.champ.ponderation = this.critereForm.get('ponderation')?.value;
  

  this.champ.titrecritere = titreCritere;

  console.log("ponderation", this.champ.ponderation, "titreee: ", this.champ.titrecritere);
  this.champsList.push({ ...this.champ });
  this.critereForm.reset();
  this.critereIsAdded = true;
}
}





  
  onSubmitg() {
    if (this.grilleForm.valid && !this.VerficationCategorie() && this.ThemeIsAdded) {
      
      const grilleData = this.grilleForm.value;
   
        this.grilleService.addGrille(grilleData).subscribe(
          (data:any) => {
            //console.log(data.IdTheme);
            console.log("grille ",data.idGrille);
            this.getGrilles();
            this.Message="Grille Ajoutée avec succés !"
            this.showSuccess();
            for(let item of this.formData2){
              item.grille=data.idGrille;
             console.log(item);
             this.grilleService.ModifThemeGrille(item.IdTheme,item).subscribe(
              (data: any) => {
             
            
                this.displayDialogGrille=false
                this.grilleForm.reset();
                this.champsList=[]
                this.formData2=[]
              })
            }

  
          },
          (error) => {
            // Gestion des erreurs
            console.error('Erreur lors de l\'ajout de grille :', error);
          }
          
        );
    
         
       
    } 
    else{
      this.Message="Il faut remplir les champs et sélectionner une fonction valide";
      this.showError();
    }
  }


showDialog2() {
  this.displayDialog2 = true;
  //this.ListThemes();
}

showDialog() {
  this.displayDialog = true;
}



showDialog3(idT:number) {
  this.displayDialog = true;
  console.log(idT);
  this.Id=idT 
  
}
message!:string
showDialogGrille() {
 
  this.displayDialogGrille = true;
}

showInf()
{
  this.message = 'Il faut ajouter au moin un critere et un théme , et choisir une fonction qui n\' a pas de grille';
  console.log(this.showMessage);
  
  setTimeout(() => {
    this.showMessage = true;
  }, 3000);
}

HideDialogGrille() {
  this.displayDialogGrille = false;
}


  theme1 : any;
  titre !:string;
  selected: SelectItem = { value: '' };

 



  ListThemes() {
    const themeData = this.themeForm.value;
    this.grilleService.getAllThemes().subscribe(
      (res) => {
        console.log("List of themes: ", res);
  
        // Assuming 'res' is an array of themes
        const themes = res as Themes[];

        this.listeCrieres();
      }
    );
  }
  

getCategorieById(id:number):String
{
  this.grilleService.getFonctionById(id).subscribe(
    data=>
    {
      this.lib1Value = data.lib1;
      console.log(data);
      
    }
  )
  return this.lib1Value
 
}

 


  listeCrieres()
  {
    this.Themes.forEach((element)=>
      {
        if (element!=null)
        {

          this.grilleService.getCriteresByTheme(element.IdTheme).subscribe((data) => {
            this.criteres = data;
           console.log("categoriess :", this.criteres)
          });
        }
      })
  }

 
  



  toggleExpandedTheme(theme: any) {
    const index = this.expandedThemes.indexOf(theme);
    if (index !== -1) {
      this.expandedThemes.splice(index, 1);
    } else {
      this.expandedThemes.push(theme);
    }
  }
  
  isThemeExpanded(theme: any) {
    return this.expandedThemes.includes(theme);
  }
  




  ModifierGrille(idG:number)
  {
  console.log(idG);
  this.IdGrilleAmodifier=idG;
  this.GrilleSelected=true ;
  this.displayDialogGrillemod = true;
  
  this.getGrilleById();
  this.grilleForm.reset();
 
  }
testt=false


updateGrille(): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    const grilleData = this.grilleForm.value;
    this.grilleService.modifGrille(this.IdGrilleAmodifier, grilleData).subscribe(() => {
      console.log("modife avec succès", this.testt);
      this.testt = true;
      const updateThemePromises = this.formData2.map(item => {
        item.grille = this.IdGrilleAmodifier;
        console.log(item);
        return new Promise<boolean>((resolveTheme, rejectTheme) => {
          this.grilleService.ModifThemeGrille(item.IdTheme, item).subscribe(
            (data: any) => {
              console.log("modif theme avec succès", data);
              resolveTheme(true);
            },
            error => {
              rejectTheme(error);
            }
          );
        });
      });

      Promise.all(updateThemePromises)
        .then(() => {
          this.displayDialogGrille = false;
         // this.champsList = [];
          this.formData2 = [];
          this.displayy = false;
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

  /* updateGrille():boolean
  {
    
    const grilleData = this.grilleForm.value;
    this.grilleService.modifGrille(this.IdGrilleAmodifier,grilleData).subscribe( data=>
      {
        console.log("modife avec suceesssssssssssss",this.testt);
       this.testt=true;
       for(let item of this.formData2){
        item.grille=this.IdGrilleAmodifier ;
       console.log(item);
       this.grilleService.ModifThemeGrille(item.IdTheme,item).subscribe(
        (data: any) => {
          console.log("modif theme avec succes", data);
      
          this.displayDialogGrille=false
          this.champsList=[];
          this.formData2=[];
          this.displayy=false;
        })
      }
       
      })
      return this.testt ;
  } */

    async modG()
    {
      console.log(this.testt);
      
      if(await this.updateGrille())
        {
          console.log("ey");
          this.getGrilles();
          this.getThemeByGrille();
          //this.Message="Grille modifiée avec succés !"
         // this.showSuccess();
          
        }else
        {
          console.log("lé");
          this.getGrilles();
        }
    }
 

testtTh=false

  updateTheme():boolean
  {
    const themeData = this.themeForm.value;
    
    this.grilleService.modifTheme(this.IdThemeAmodifier,themeData).subscribe((data:any)=>
      {
 
       console.log(data);
       console.log("modife avec suceesssssssssssss");
       this.testtTh=true
       console.log(this.testtTh);   
       for(let item of this.champsList){
        item.theme=data.idTheme;
        this.grilleService.createCritere(item).subscribe(
          (data:any) => {
  
            console.log('criteres ajouté avec succès !');
            console.log("critere: ",data);
          
          
           this.tabCatId.push(data.idCritere)
            console.log(this.tabCatId);
           
          
          },
          (error) => {
            // Gestion des erreurs
            console.error('Erreur lors de l\'ajout du critere :', error);
          }
        );
      }
     
      })
      return this.testtTh
  }



  modT()
  {
    if(this.updateTheme())
      {
       
       // this.displayDialogThememod=false; 
        }
        this.getThemeByGrille();
  }


  updateCriteree():boolean
  {
    const critereData = this.critereForm.value;
    
    this.grilleService.modifCritere(this.IdCritereAmodifier,critereData).subscribe((data)=>
      {

       console.log(data);
       console.log("modife avec suceesssssssssssss");
       this.testtTh=true
       console.log(this.testtTh);   
       this.getCritereByThemeMod();
      })
      return this.testtTh
  }


  
  modC()
  {
    if(this.updateCriteree())
      {
        
        this.getCritereByThemeMod();
        this.grilleService.getCriteresByTheme(this.IdThemeAmodifier).subscribe
          ((data :Critere[])=>
            {
              console.log("liste des criteres pour theme",data);
              this.champsList=[];
              this.CritereSelected=false;
              this.Message="Critére modifié avec succés !" 
              this.showSuccess();
              this.critereForm.reset() ;
              this.champsList=data;   
              
              
            })
       // this.CritereSelected=false;

        }
       
  }

  updateCritere()
  {
    const critereData = this.critereForm.value;
    this.grilleService.modifCritere(this.IdCritereAmodifier,critereData).subscribe(data=>
      {

       console.log(data);
       
        this.Message="Critere modifié avec succès !"
        this.showSuccess();
        //this.displayDialogCriteremod=false
       
      })
  }



  ModifierTheme(idT:number)
  {
  console.log(idT);
  this.IdThemeAmodifier=idT;
  this.ThemeSelected=true;
  this.displayDialogThememod=true;
   this.getThemeById();
   this.getCritereByThemeMod();
  }



  ModifierCritere(idC:number)
  {
  
    this.IdCritereAmodifier=idC; 
    console.log("hedhi ",this.IdCritereAmodifier);
    
    this.CritereSelected=true;
    this.getCritereById();
  }


  criteresByThemeByGrille:Critere[]=[]
  
  getGrilleById()
  {
     
   this.grilleService.getGrilleById(this.IdGrilleAmodifier).subscribe(data=>
    {
     
      this.ancienneGrille=data;
      this.grilleForm.patchValue({
        titreG: this.ancienneGrille.titreG,
        fonction:this.ancienneGrille.fonction
      });
    this.getThemeByGrille() ;


    });
    this.grilleForm.reset();
  }


getThemeByGrille()
{
  this.grilleService.getThemesByGrille(this.IdGrilleAmodifier).subscribe((dataT:Themes[])=>
  {
    console.log("liste des themes pour grille",dataT);
    this.formData=[] ; 
    this.formData=dataT ;
   
  })
}


getCritereByThemeMod()
{
  this.grilleService.getCriteresByTheme(this.IdThemeAmodifier).subscribe
  ((data :Critere[])=>
    {
      console.log("liste des criteres pour theme",data);
      this.champsList=[];
      this.champsList=data;   
      
      
    })
}


getCritereByTheme()
{
    
    this.formData2.forEach((ancienTheme)=>
    {
      this.grilleService.getCriteresByTheme(ancienTheme.IdTheme).subscribe
  ((data :Critere[])=>
    {

      console.log(data);
      this.criteresByTheme=data;
      
    })
    this.ancienTitreTheme=ancienTheme.titre
    //this.criteresByTheme=[]
    }
    )
  
}



  
  getThemeById()
  {
     console.log(this.IdThemeAmodifier);
     
   this.grilleService.getThemeyId(this.IdThemeAmodifier).subscribe(data=>
    {
     
      this.ancienTheme=data;
      this.themeForm.patchValue({
        titre: this.ancienTheme.titre
        
      });
    });
  }



  
  getCritereById()
  {
    console.log(this.IdCritereAmodifier);
    this.grilleService.getCritereById(this.IdCritereAmodifier).subscribe(data=>
      {
        this.ancienneCritere=data;
        this.critereForm.patchValue({
          titrecritere:this.ancienneCritere.titrecritere,
          ponderation:this.ancienneCritere.ponderation
        })
      })
  }

  displayy:boolean=false ; 

  ajoutTheme()
  {
      this.displayy=true; 
  }


  displayyC:boolean=false ; 

  ajoutCritere()
  {
      this.displayyC=true; 
  }


  get themeFormControls() {
    return this.themeForm.controls;
  }

  get critereFormControls() {
    return this.critereForm.controls;
  }

  get grilleFormControls() {
    return this.grilleForm.controls;
  }
  Header:string="kokok"

  enTempsReel()
  {
    const titreCritere = this.critereForm.get('titrecritere')?.value;
    const ponderation = this.critereForm.get('ponderation')?.value;
    
    this.champ.ponderation=this.critereForm.get('ponderation')?.value;
    this.champ.titrecritere= this.critereForm.get('titrecritere')?.value;    
        this.champsList.push({...this.champ});
    
    this.critereForm.reset();
    
  }

}
