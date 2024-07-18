import { Pipe, PipeTransform } from '@angular/core';
import { GrilleEvalService } from './services/grille-eval.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'pipemethods'
})
export class PipemethodsPipe implements PipeTransform {
  libNom!:string
  constructor(private grilleService:GrilleEvalService){}
  async transform(idnom:number) {
    if(idnom){
      const reponce : any=await this.grilleService.getFonctionById(idnom).toPromise();
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
