import { Pipe, PipeTransform } from '@angular/core';
import { UtilisateurService } from './services/utilisateur.service';

@Pipe({
  name: 'getContratEvalue'
})
export class GetContratEvaluePipe implements PipeTransform {

  constructor(private utilisateurService:UtilisateurService){}
  async transform(mat:string):Promise<number> {
    if(mat){
      const reponce : any=await this.utilisateurService.getMat(mat).toPromise();
   
      if(reponce){
     
        
        return reponce.contrat;
      }else{ 
        return 0
      }
    }else{
      return 0
    }
  }

}
