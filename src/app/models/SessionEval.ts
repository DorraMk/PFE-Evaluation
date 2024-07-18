import { Declenchement } from "./Declenechement"
import { ResultatEval } from "./ResultatEval"
import { Utilisateur } from "./Utilisateur"

export class SessionEval {
	 IdSession!:number
	 dateDebut!:string
	 dateLancement!:string
	 dateFin!:Date
	 titre!:string
	 periode!:number
	 flag_lance!:boolean
	 declenchement!:Declenchement;
	 desactiverSession!:boolean;
	 evals !: String[]
	 //resultat!:ResultatEval

 
}