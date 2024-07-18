import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getMat(mat:string):Observable<any>
  {
   const url=`http://localhost:8088/evaluation/utilisateur/getByMat/${mat}`; 
   return this.http.get<any>(url,{})
  }
}
