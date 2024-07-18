import { Pipe, PipeTransform } from '@angular/core';
import { UtilisateurService } from './services/utilisateur.service';

@Pipe({
  name: 'getFonctionEvalue'
})
export class GetFonctionEvaluePipe implements PipeTransform {

  
  libNom!:string
  constructor(private utilisateurService:UtilisateurService){}
  async transform(mat:string):Promise<number> {
    if(mat){
      const reponce : any=await this.utilisateurService.getMat(mat).toPromise();
   
      if(reponce){
   
        
        return reponce.codeFonction;
      }else{ 
        return 0
      }
    }else{
      return 0
    }
  }

}
