import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionEval } from '../models/SessionEval';
import { Observable } from 'rxjs';
import { Rhnom } from '../models/rhnom';
import { SessionRhnom } from '../models/SessionRhnom';


const API_URL ='http://localhost:8088/evaluation/session';

@Injectable({
  providedIn: 'root'
})
export class SessionEvalService {


  constructor(private http: HttpClient) { }

  getContrat():Observable<any[]>
  {
    const url=`http://localhost:8088/evaluation/rhnom/getContrat` 
    return this.http.get<any[]>(url,{});
  }

  getAllSessions(): Observable<SessionEval[]>{

    return this.http.get<SessionEval[]>(API_URL+'/getSessions');
  }
  
  createSession(data: SessionEval): Observable<any> {
    const url = 'http://localhost:8088/evaluation/session/ajoutSession'
    return this.http.post<SessionEval>(url, data);
    
  }

  createSessionrh(data: SessionRhnom): Observable<any> {
    const url = 'http://localhost:8088/evaluation/session/ajoutSessionRh'
    return this.http.post<SessionRhnom>(url, data);
    
  }



  modifSessionn(Id:number,data:any):Observable<void>
  {
    const url=`http://localhost:8088/evaluation/session/modifSession/${Id}`;
    return this.http.put<void>(url,data);
  }


   getContratBySession(idsess:number):Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/rhnom/getContratBySession/${idsess}`; 
    return this.http.get<any[]>(url,{})
   }

   getFonctionBySession(idsess:number):Observable<any[]>
   {
    const url=`http://localhost:8088/evaluation/rhnom/getFonctionBySession/${idsess}`; 
    return this.http.get<any[]>(url,{})
   }

  FonctionSession(idnom: number, item: Rhnom): Observable<void> {
    const url = `http://localhost:8088/evaluation/rhnom/affecterPopulations/${idnom}`;
    return this.http.put<void>(url, item);
  }
  FonctionSession2(idnom: number, idSession: number): Observable<void> {
    const url = `http://localhost:8088/evaluation/rhnom/affecterPopulations/${idnom}/${idSession}`;
    return this.http.put<void>(url, {});
  }
  
  ContratSession(idnom:number,item:Rhnom):Observable<void>
  {
    const url=`http://localhost:8088/evaluation/rhnom/affecterPopulationsContrat/${idnom}`
    return this.http.put<void>(url, item);
  }

  ContratSession2(idnom: number, idSession: number): Observable<void> {
    const url = `http://localhost:8088/evaluation/rhnom/affecterPopulationsContrat/${idnom}/${idSession}`;
    return this.http.put<void>(url, {});
  }
  

  Desactiver(id:number):Observable<void>
{
  const url=`http://localhost:8088/evaluation/session/desactiverSession/${id}`
  return this.http.put<void>(url,{}); 
}  
  getFonctionById(idnom:number):Observable<Rhnom>
  {
    const url=`http://localhost:8088/evaluation/rhnom/getbyId/${idnom}` ;
    return this.http.get<Rhnom>(url,{})
  }

  Verifier(id:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/session/lancerSession/${id}`
    return this.http.put(url,{});
  }


  Verifierman(id:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/session/lancerSessionMan/${id}`
    return this.http.put(url,{});
  }

  getPop(id:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/session/getpop/${id}`
    return this.http.get(url,{})
  }

  getEv(id:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/session/geteval/${id}`
    return this.http.get(url,{})
  }
  
  getSession(id:number):Observable<any>
  {
    const url=`http://localhost:8088/evaluation/session/getSession/${id}`
    return this.http.get(url,{})
  }

  modifSession(Id:number,data:any):Observable<void>
  {
    const url=`http://localhost:8088/evaluation/session/modif/${Id}`;
    return this.http.put<void>(url,data);
  }

  SessionEval(Id:number,data:any):Observable<void>
  {
    const url=`http://localhost:8088/evaluation//session/SessionEvaluateur/${Id}`;
    return this.http.put<void>(url,data);
  }

  getDeclenchement(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8088/evaluation/session/declenchement');
  }
}
