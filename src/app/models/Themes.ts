import { Critere } from "./Critere"
import { GrilleEval } from "./GrilleEval"
import { Rhnom } from "./rhnom"

export class Themes {
    IdTheme!:number
    titre!:string
    grille!:number
    criteres: Critere[] = [];

}