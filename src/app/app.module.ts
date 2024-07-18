import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemsComponent } from './components/menuitems/menuitems.component';
import { ConfigComponent } from './components/config/config.component';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import{ListboxModule} from 'primeng/listbox';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { PasswordModule } from 'primeng/password';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { FieldsetModule } from 'primeng/fieldset';
import { RatingModule } from 'primeng/rating';
import { SpeedDialModule } from 'primeng/speeddial';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TagModule } from 'primeng/tag';
import { InputTextareaModule } from "primeng/inputtextarea";
import { FileUploadModule } from 'primeng/fileupload';
import { GrilleEvalComponent } from './components/grille-eval/grille-eval.component';
import { OrganigrammeComponent } from './components/organigramme/organigramme.component';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';
import { SessionEvalComponent } from './components/session-eval/session-eval.component';
import { CalendarModule } from 'primeng/calendar';
import { PipemethodsPipe } from './pipemethods.pipe';
import { TreeNode } from 'primeng/api';
import { CriteresByThemePipe } from './criteres-by-theme.pipe';
import { ContratsBySessionPipe } from './contrats-by-session.pipe';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FonctionBySessionPipe } from './fonction-by-session.pipe';
import { GetLib1Pipe } from './get-lib1.pipe';
import { LoginComponent } from './components/login/login.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { FaireEvalComponent } from './components/evaluation/faire-eval/faire-eval.component';
import { GetEvaluePipe } from './get-evalue.pipe';
import { GetFonctionEvaluePipe } from './get-fonction-evalue.pipe';
import { GetFonctionNomPipe } from './get-fonction-nom.pipe';
import { GetContratEvaluePipe } from './get-contrat-evalue.pipe';
import { ResultatEvalComponent } from './components/resultat-eval/resultat-eval.component';
import { GetSessionPipe } from './get-session.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './services/websocket.service';
import { ConfirmationService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
const socketIoConfig: SocketIoConfig = {
  url: 'ws://localhost:8088/evaluation/ws',
  options: {},
};


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    TopBarComponent,
    LayoutComponent,
    MenuComponent,
    MenuitemsComponent,
    ConfigComponent,
    GrilleEvalComponent,
    OrganigrammeComponent,
    SessionEvalComponent,
    PipemethodsPipe,
    CriteresByThemePipe,
    ContratsBySessionPipe,
    FonctionBySessionPipe,
    GetLib1Pipe,
    LoginComponent,
    EvaluationComponent,
    FaireEvalComponent,
    GetEvaluePipe,
    GetFonctionEvaluePipe,
    GetFonctionNomPipe,
    GetContratEvaluePipe,
    ResultatEvalComponent,
    GetSessionPipe,
    DashboardComponent,

 
  ],
  imports: [
    SocketIoModule.forRoot(socketIoConfig),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    ListboxModule,
    HttpClientModule,
    TabViewModule,
    ToolbarModule,
    SocketIoModule,
    BadgeModule,
    DialogModule,
    JsonPipe,
    FormsModule,
    AccordionModule,
    SidebarModule,
    MessageModule,
    TreeModule,
    OrganizationChartModule,
    RadioButtonModule,
    MenuModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    InputSwitchModule,
    SpeedDialModule,
    TreeTableModule,
    ChartModule,
    ConfirmDialogModule,
    CommonModule,
    DividerModule,
    MessagesModule,
    CheckboxModule,
    OrderListModule,
    InputTextModule,
    PasswordModule,
    FieldsetModule,
    BrowserAnimationsModule,
		TableModule,
		RatingModule,
    SplitButtonModule,
    FileUploadModule,
		SliderModule,
    PanelModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
    TagModule,
    InputTextareaModule
  ],
  providers: [MessageService,WebsocketService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
