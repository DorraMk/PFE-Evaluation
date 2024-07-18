import { Groupe } from "./Groupe"

export class Alerte {
    groupe!:Groupe
	messageNotif!:string
	condition!:string
	cutimod!:string
	datemod!:Date
    description!:string
	desactiverAlerte!:boolean
    typeHebdoMens!:boolean

}