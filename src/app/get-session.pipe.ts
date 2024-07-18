import { Pipe, PipeTransform } from '@angular/core';
import { SessionEvalService } from './services/session-eval.service';

@Pipe({
  name: 'getSession'
})
export class GetSessionPipe implements PipeTransform {

  
  constructor(private sessionService:SessionEvalService){}

  async transform(idSession:number) {
    if(idSession){
      console.log("xxxx",idSession);
      
      const reponce : any=await this.sessionService.getSession(idSession).toPromise();
      if(reponce){
        console.log("liste",reponce);
        
        return reponce.titre;
      }else{ 
        return null;
      }
    }else{
      return null
   }
}

}
