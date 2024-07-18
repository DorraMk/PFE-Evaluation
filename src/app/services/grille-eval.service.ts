import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Themes } from '../models/Themes';
import { TreeNode } from 'primeng/api';
import { Rhnom } from '../models/rhnom';
import { Critere } from '../models/Critere';
import { GrilleEval } from '../models/GrilleEval';


const API_URL ='http://localhost:8088/evaluation/theme/';
const API_URL2 ='http://localhost:8088/evaluation/critere';
const API_URL3 ='http://localhost:8088/evaluation/rhnom';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class GrilleEvalService {

  constructor(private http: HttpClient) {}

 

  getGrilleById(idnom:any): Observable<any>{
   const  url=`http://localhost:8088/evaluation/grille/getById/${idnom}`
   return this.http.get(url,idnom);
  }

  getThemeyId(idT:any): Observable<any>{
    const  url=`http://localhost:8088/evaluation/theme/getById/${idT}`
    return this.http.get(url,idT);
   }

   getCritereById(idC:any): Observable<any>{
    const  url=`http://localhost:8088/evaluation/critere/getById/${idC}`
    return this.http.get(url,idC);
   }


  addTheme(theme: Themes): Observable<Themes> {
   
    const url = 'http://localhost:8088/evaluation/theme/add-theme'
    return this.http.post<Themes>(url, theme);
  }


  createCritere(data: any): Observable<any> {
    const url='http://localhost:8088/evaluation/critere/add-critere'
     return this.http.post(url, data);
   }


   addGrille(data:any):Observable<any>
   {
    const url='http://localhost:8088/evaluation/grille/add-grille'
    return this.http.post(url,data);
   }


  affecterThemeAuCritere(critereId: number,data: any): Observable<void> {
    const url = `http://localhost:8088/evaluation/critere/affectationcritTheme/${critereId}`;
    return this.http.put<void>(url, data);
  }
 


  ModifThemeGrille(themeId: number, item: Themes): Observable<void> {
    const url = `http://localhost:8088/evaluation/theme/modifThemeGrille/${themeId}`;
    return this.http.put<void>(url, item);
  }


  getThemesByGrille(grilleId:number):Observable<Themes[]>
    {
      const url=`http://localhost:8088/evaluation/theme/getThemeByGrille/${grilleId}`;
      return this.http.get<Themes[]>(url)
      
    }  


  affecterGrilleTheme(grilleId:number ,themeId:number):Observable<void>
  {
    const url=`http://localhost:8088/evaluation/grille/affecterGrilleT/${grilleId}/${themeId}`;
    return this.http.put<void>(url,{});
  }
  

  getFonctionById(idnom:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/rhnom/getCatbyId/${idnom}`
    return this.http.get(url,{})
  }

  getByFonction(idnom:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/grille/getByFonction/${idnom}`
    return this.http.get(url,{})
  }


  getAllThemes(): Observable<Themes[]>{

    return this.http.get<Themes[]>(API_URL+'getThemes');
  }

  getAllGrilles():Observable<GrilleEval[]>{
    const url=`http://localhost:8088/evaluation/grille/getAll`;
    return this.http.get<GrilleEval[]>(url);
    }

  modifGrille(grilleId:number,data:any):Observable<void>
    {
      const url=`http://localhost:8088/evaluation/grille/modif/${grilleId}`;
      return this.http.put<void>(url,data);
    }

    modifTheme(themeId:number,data:any):Observable<any>
    {
      const url=`http://localhost:8088/evaluation/theme/modif/${themeId}`;
      return this.http.put<any>(url,data);
    }



    modifCritere(critereId:number,data:any):Observable<void>
    {
      const url=`http://localhost:8088/evaluation/critere/modif/${critereId}`;
      return this.http.put<void>(url,data);
    }


  getCat(): Observable<any[]>{

    return this.http.get<any[]>(API_URL3+'/getCat');
  }


  getThemesByCategorie2(idT : number): Observable<any[]>{

    return this.http.get<any[]>(API_URL+'getByCat2/'+idT);
  }


  getCriteresByTheme(idT :number):Observable<any[]>
  {
    return this.http.get<any[]>(API_URL2+'/getByTheme/'+idT) ;
  }



  GetDirection():Observable<any>
  {
    const url=`http://localhost:8088/evaluation/rhnom/getDir`;
    return this.http.get<any>(url);
  }
  
  GetUtilisateur():Observable<any>
  {
    const url=`http://localhost:8088/evaluation/rhnom/getUtilisateur`;
    return this.http.get<any>(url);
  }

  
}
