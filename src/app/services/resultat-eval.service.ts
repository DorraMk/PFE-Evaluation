import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rhnom } from '../models/rhnom';
import { resultatCritere } from '../models/resultatCritere';

@Injectable({
  providedIn: 'root'
})
export class ResultatEvalService {

  constructor(private http: HttpClient) { }

  getByEvaluateur(mat:String):Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/resultat/getByEvaluateur/${mat}`; 
    return this.http.get<any[]>(url,{})
   }

   getListe():Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/resultat/ListeRes`; 
    return this.http.get<any[]>(url,{})
   }

   getById(id:number):Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/resultat/getById/${id}`; 
    return this.http.get<any[]>(url,{})
   }

   updateRes(id:number,data:any):Observable<void>
   {
    const url=`http://localhost:8088/evaluation/resultat/updateResultat/${id}`;
    return this.http.put<void>(url,data);
   }

   calculateAverageResultat():Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/resultat/average`; 
    return this.http.get<any[]>(url,{})
   }

   calculateAverageResultatByUser(mat:string):Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/resultat/evolution/${mat}`; 
    return this.http.get<any[]>(url,{})
   }

   addResCritere(result:resultatCritere):Observable<resultatCritere>
   {
    const url=`http://localhost:8088/evaluation/critereRes/add-Rescritere`; 
    return this.http.post<resultatCritere>(url,result)
   }

    TauxParFonction(idnom:number):Observable<any[]>
    {
     const url=`http://localhost:8088/evaluation/resultat/tauxParCritere/${idnom}`; 
     return this.http.get<any[]>(url,{})
    }

    getReport(idRes:number, matricule:string):Observable<Blob> 
    {
     const url=`http://localhost:8088/evaluation/report/myreport/${idRes}/${matricule}`; 
     return this.http.get(url, { responseType: 'blob' });
    }


}
