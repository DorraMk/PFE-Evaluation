import { Pipe, PipeTransform } from '@angular/core';
import { SessionEvalService } from './services/session-eval.service';
import { Rhnom } from './models/rhnom';

@Pipe({
  name: 'contratsBySession'
})
export class ContratsBySessionPipe implements PipeTransform {

  
  constructor(private sessionService:SessionEvalService){}

  async transform(idSession:number) {
    if(idSession){
      console.log("xxxx",idSession);
      
      const reponce : any=await this.sessionService.getContratBySession(idSession).toPromise();
      if(reponce ){
        console.log("liste contrat",reponce);
        
        return reponce ;
      }else{ 
        return null;
      }
    }else{
      return null
   }
}
}