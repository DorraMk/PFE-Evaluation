import { Pipe, PipeTransform } from '@angular/core';
import { GrilleEvalService } from './services/grille-eval.service';

@Pipe({
  name: 'criteresByTheme'
})
export class CriteresByThemePipe implements PipeTransform {
  constructor(private grilleService:GrilleEvalService){}

  async transform(idTheme:number) {
    if(idTheme){
      console.log("xxxx",idTheme);
      
      const reponce : any=await this.grilleService.getCriteresByTheme(idTheme).toPromise();
      if(reponce){
        console.log("liste",reponce);
        
        return reponce;
      }else{ 
        return null;
      }
    }else{
      return null
    }
  }

  

}
