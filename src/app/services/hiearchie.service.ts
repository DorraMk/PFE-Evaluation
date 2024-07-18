import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hierachie } from '../models/hierarchie';
import { Utilisateur } from '../models/Utilisateur';



const server = 'http://localhost:8088/evaluation/hierarchie';
const API_URL ='http://localhost:8088/evaluation/hierarchie/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class HiearchieService {



  constructor(private http: HttpClient) {}




  getByMatricule (mat:string) : Observable<hierachie[]> {
    return this.http.get<hierachie[]>(`${server}/getByMat/${mat}`);
}



getByMatriculSup (mat:string) : Observable<hierachie[]> {
  return this.http.get<hierachie[]>(`${server}/getByMatSup/${mat}`);
}
/*getHierarchie () : Observable<Utilisateur[]> {
  return this.http.get<Utilisateur[]>(`${server}/getHier`);
}*/

getHierarchie():Observable<any>
{
  return this.http.get(API_URL+'getHier');
}
getHierarchiee():Observable<any[]>
{
  const url=`http://localhost:8088/evaluation/hierarchie/getOrgani`; 
    return this.http.get<any[]>(url,{})
}


DB!: Promise<IDBDatabase>;
DB_NAME = 'org-data';
DB_VERSION = 2;
STORAGE_NAME = 'data';


}
