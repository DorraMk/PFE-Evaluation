import { Pipe, PipeTransform } from '@angular/core';
import { UtilisateurService } from './services/utilisateur.service';

@Pipe({
  name: 'getEvalue'
})
export class GetEvaluePipe implements PipeTransform {

  libNom!:string
  constructor(private utilisateurService:UtilisateurService){}
  async transform(mat:string) {
    if(mat){
      const reponce : any=await this.utilisateurService.getMat(mat).toPromise();
     
      if(reponce){
       
        
        return reponce.usrNomprenom;
      }else{ 
        return "--";
      }
    }else{
      return "--"
    }
  }
}
