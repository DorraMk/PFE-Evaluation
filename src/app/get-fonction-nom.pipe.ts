import { Pipe, PipeTransform } from '@angular/core';
import { GrilleEvalService } from './services/grille-eval.service';

@Pipe({
  name: 'getFonctionNom'
})
export class GetFonctionNomPipe implements PipeTransform {


  libNom!:string
  constructor(private grilleService:GrilleEvalService){}
  async transform(idnom: Promise<number>) {
    if(idnom){
      const reponce : any=await this.grilleService.getFonctionById(await idnom).toPromise();
   
      if(reponce){
       
        
        return reponce.lib1;
      }else{ 
        return "--";
      }
    }else{
      return "--"
    }
  }

}
