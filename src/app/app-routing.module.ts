import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { OrganigrammeComponent } from './components/organigramme/organigramme.component';
import { GrilleEvalComponent } from './components/grille-eval/grille-eval.component';
import { SessionEvalComponent } from './components/session-eval/session-eval.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { FaireEvalComponent } from './components/evaluation/faire-eval/faire-eval.component';
import { ResultatEvalComponent } from './components/resultat-eval/resultat-eval.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  imports: [RouterModule.forRoot([
    {
        path: '', component: LayoutComponent,
        children: [
          {path:"organigramme",component:OrganigrammeComponent},
          {path:"grille",component:GrilleEvalComponent},
          {path :"session", component:SessionEvalComponent},
          {path :"evaluation", component:EvaluationComponent},
          {path :"faireEval/:id", component:FaireEvalComponent},
          {path :"resultat",component:ResultatEvalComponent},
          {path :"dashboard",component:DashboardComponent}
          
        ]
    },
    {path:"login",component:LoginComponent},
    { path: '**', redirectTo: '/notfound' },
], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
