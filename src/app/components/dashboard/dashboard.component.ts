import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GrilleEvalService } from 'src/app/services/grille-eval.service';
import { ResultatEvalService } from 'src/app/services/resultat-eval.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  dataUtilisateur:any;
  data2:any;
  currentUser: any;
  options: any;
  basicData: any;
  basicOptions: any;
    basicData2:any
    Rhnomm!: any[];
    modelDirection: any[] = [];
    modelUtilisateur: any[] = [];
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    testDirection!:boolean
  constructor( private resultatService: ResultatEvalService,
    private grilleService: GrilleEvalService,
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private utilisateurService: UtilisateurService ){}

  ngOnInit() {


    if (this.tokenStorage.getToken()) {
        this.currentUser = this.tokenStorage.getUser();
        this.loadCategories();
      }


      if (this.tokenStorage.getToken()) {
        this.currentUser = this.tokenStorage.getUser();
        this.loadCategories();
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
    
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    }
      this.resultatService.calculateAverageResultat().subscribe(data=>
        {
            console.log(data);
            
                    const years: any[] = [];
                    const averageResults: any[] = [];

                    data.forEach(innerArray => {
                        innerArray.forEach((item: any) => {
                          const value = item;
                          const isYear = value.toString().length === 4;
                    
                          if (isYear) {
                            years.push(value);
                          } else {
                            averageResults.push(value);
                            console.log("ooooo" ,averageResults);
                            
                          }
                        });
                      });

        console.log('Years:', years);
        console.log('Average Results:', averageResults);
        this.resultatService.calculateAverageResultatByUser(this.currentUser.usrMatricule).subscribe((data2)=>
        {

            console.log("calculateAverageResultatByUser" ,data2);

        
            const yearss: any[] = [];
            const averageResultss: any[] = [];

            data2.forEach(innerArray => {
                innerArray.forEach((item: any) => {
                  const value = item;
                  const isYear = value.toString().length === 4;
            
                  if (isYear) {
                    yearss.push(value);
                  } else {
                    averageResultss.push(value);
                  }
                });
              });

    console.log('Years:', yearss);
    console.log('Average Results:', averageResultss);

    
     this.data2 = {
        labels: yearss,
        datasets: [
        {
            label: 'Average Resultat',
            data: averageResultss,
            fill: true,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4
        }
        ]
    }; 
     
        
            
            this.data = {
                labels: years,
                datasets: [
                {
                    label: 'Evolution générale',
                    data: averageResults,
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Votre evolution',
                    data: averageResultss,
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
                ]
            };
            this.dataUtilisateur = {
              labels: years,
              datasets: [
            
              {
                  label: 'Votre evolution',
                  data: averageResultss,
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--pink-500'),
                  tension: 0.4
              }
              ]
          };
            });
        }) 



this.getChart();



  }

  selectedIdnom: number=264;


  loadCategories() {
    this.grilleService.getCat().subscribe((data :any[]) => {
      
     this.Rhnomm=data;
     
    });
  }
  onIdnomSelect(event: any) {
    this.selectedIdnom = event.value;
    console.log(this.selectedIdnom);
    this.getChart();
  }

  getChart()
  {
    
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

this.resultatService.TauxParFonction(this.selectedIdnom).subscribe(data => {
    console.log("show meeee ", data);
    
    const xData: string[] = [];
    const yData: number[] = [];
    const y2Data: number[] = [];

    data.forEach(pair => {
        
          y2Data.push(pair[0]);
          yData.push(pair[1]);
          xData.push(pair[2])
        
      });

    console.log("x : ", xData);
    console.log("Y :", yData);
    console.log("Y2 :", y2Data);
    
  this.basicData = {
    labels: xData,
    datasets: [
      {
        label: 'Moyenne',
        data: yData,y2Data,
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
        borderWidth: 1,
      },
     /*  {
        label: 'Année',
        data: y2Data,
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
        borderWidth: 1,
      } */
    ]
        
    
  };


  this.basicOptions = {
    responsive: true,
 
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      y: {
        position: 'right',
        beginAtZero: false,
        ticks: {
        
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
  
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },

    
    },
  };
});
  }

  }


