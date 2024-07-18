import { Pipe, PipeTransform } from '@angular/core';
import { SessionEvalService } from './services/session-eval.service';

@Pipe({
  name: 'fonctionBySession'
})
export class FonctionBySessionPipe implements PipeTransform {

  
  constructor(private sessionService:SessionEvalService){}

  async transform(idSession:number) {
    if(idSession){
      console.log("xxxx",idSession);
      
      const reponce : any=await this.sessionService.getFonctionBySession(idSession).toPromise();
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
