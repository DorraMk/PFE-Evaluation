import { UtilisateurService } from "../services/utilisateur.service";


export async function performTransform(mat: string, utilisateurService: UtilisateurService): Promise<number> {

  if (mat) {
    const response: any = await utilisateurService.getMat(mat).toPromise();
    if (response) {
      console.log("fonction evalue ", response.codeFonction);
      return response.codeFonction;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
