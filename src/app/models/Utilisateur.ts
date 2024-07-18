import { GrilleEval } from "./GrilleEval"
import { Groupe } from "./Groupe"
import { SessionEval } from "./SessionEval"

export class Utilisateur {
    
    usrMatricule!:string
    usrNomprenom!:string
	password!:string
	dateRecrutement!:Date
	codeFonction!:number
	contrat!:number
	dateContrat!:Date
	roles!:String[]
	
  

}