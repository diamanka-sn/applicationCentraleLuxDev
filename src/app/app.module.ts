import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { MenuNavigationComponent } from './composants/menu-navigation/menu-navigation.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { ListeRayonComponent } from './composants/rayon/liste-rayon/liste-rayon.component';
import { DetailRayonComponent } from './composants/rayon/detail-rayon/detail-rayon.component';
import { CreerRayonComponent } from './composants/rayon/creer-rayon/creer-rayon.component';
import { ListeCategorieComponent } from './composants/categories/liste-categorie/liste-categorie.component';
import { DetailCategorieComponent } from './composants/categories/detail-categorie/detail-categorie.component';
import { CreerCategorieComponent } from './composants/categories/creer-categorie/creer-categorie.component';
import { ListeMedicamentComponent } from './composants/medicaments/liste-medicament/liste-medicament.component';
import { DetailMedicamentComponent } from './composants/medicaments/detail-medicament/detail-medicament.component';
import { CreerMedicamentComponent } from './composants/medicaments/creer-medicament/creer-medicament.component';
import { ListeFournisseurComponent } from './composants/fournisseurs/liste-fournisseur/liste-fournisseur.component';
import { DetailFournisseurComponent } from './composants/fournisseurs/detail-fournisseur/detail-fournisseur.component';
import { CreerFournisseurComponent } from './composants/fournisseurs/creer-fournisseur/creer-fournisseur.component';
import { ListeFactureComponent } from './composants/factures/liste-facture/liste-facture.component';
import { CreerFactureComponent } from './composants/factures/creer-facture/creer-facture.component';
import { DetailFactureComponent } from './composants/factures/detail-facture/detail-facture.component';
import { ListeUtilisateurComponent } from './composants/utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { CreerUtilisateurComponent } from './composants/utilisateurs/creer-utilisateur/creer-utilisateur.component';
import { CreerCollaborationComponent } from './composants/collaborations/creer-collaboration/creer-collaboration.component';
import { ListeCollaborationComponent } from './composants/collaborations/liste-collaboration/liste-collaboration.component';
import { DetailCollaborationComponent } from './composants/collaborations/detail-collaboration/detail-collaboration.component';
import { ListeBonclientComponent } from './composants/bonClients/liste-bonclient/liste-bonclient.component';
import { CreerBonclientComponent } from './composants/bonClients/creer-bonclient/creer-bonclient.component';
import { DetailBonclientComponent } from './composants/bonClients/detail-bonclient/detail-bonclient.component';
import { DetailDepenseComponent } from './composants/depenses/detail-depense/detail-depense.component';
import { ListeDepenseComponent } from './composants/depenses/liste-depense/liste-depense.component';
import { CreerDepenseComponent } from './composants/depenses/creer-depense/creer-depense.component';
import { CreerVenteComponent } from './composants/ventesMedicament/creer-vente/creer-vente.component';
import { ListeVenteComponent } from './composants/ventesMedicament/liste-vente/liste-vente.component';
import { DetailVenteComponent } from './composants/ventesMedicament/detail-vente/detail-vente.component';
import { DetailBonDeLivraisonComponent } from './composants/bonDeLivraisons/detail-bon-de-livraison/detail-bon-de-livraison.component';
import { ListeBonDeLivraisonComponent } from './composants/bonDeLivraisons/liste-bon-de-livraison/liste-bon-de-livraison.component';
import { CreerBonDeLivraisonComponent } from './composants/bonDeLivraisons/creer-bon-de-livraison/creer-bon-de-livraison.component';
import { CreerCommandeComponent } from './composants/commandeDeMedicaments/creer-commande/creer-commande.component';
import { ListeCommandeComponent } from './composants/commandeDeMedicaments/liste-commande/liste-commande.component';
import { DetailCommandeComponent } from './composants/commandeDeMedicaments/detail-commande/detail-commande.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceauthentificationService } from './services/serviceauthentification.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceutilisateurService } from './services/serviceutilisateur.service';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { AccueilComponentApp } from './accueil/accueil.component';
import { ServicemedicamentService } from './services/servicemedicament.service';
import { ServicecategorieService } from './services/servicecategorie.service';
import { ServicerayonService } from './services/servicerayon.service';
import { ServicecommandeService } from './services/servicecommande.service';
import { ServicebonClientService } from './services/ServicebonClientService';


<<<<<<< HEAD
import {DashboardModule} from './composants/dashboard/dashboard.module';
import { QuantiteMedicamentComponent } from './composants/ventesMedicament/quantite-medicament/quantite-medicament.component'
=======
import { DashboardModule } from './composants/dashboard/dashboard.module'
import { ListeClientComponent } from './composants/client/liste-client/liste-client.component';
import { DetailClientComponent } from './composants/client/detail-client/detail-client.component';
import { CreerClientComponent } from './composants/client/creer-client/creer-client.component';
import { ListeVendeurComponent } from './composants/vendeur/liste-vendeur/liste-vendeur.component';
import { DetailVendeurComponent } from './composants/vendeur/detail-vendeur/detail-vendeur.component';
import { CreervendeurComponent } from './composants/vendeur/creer-vendeur/creer-vendeur.component';
>>>>>>> origin/CYC
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponentApp,
    HeaderComponent,
    MenuNavigationComponent,
    AccueilComponent,
    NotFoundComponent,
    ListeRayonComponent,
    DetailRayonComponent,
    CreerRayonComponent,
    ListeCategorieComponent,
    DetailCategorieComponent,
    CreerCategorieComponent,
    ListeMedicamentComponent,
    DetailMedicamentComponent,
    CreerMedicamentComponent,
    ListeFournisseurComponent,
    DetailFournisseurComponent,
    CreerFournisseurComponent,
    ListeFactureComponent,
    CreerFactureComponent,
    DetailFactureComponent,
    ListeUtilisateurComponent,
    DetailUtilisateurComponent,
    CreerUtilisateurComponent,
    CreerCollaborationComponent,
    ListeCollaborationComponent,
    DetailCollaborationComponent,
    ListeBonclientComponent,
    CreerBonclientComponent,
    DetailBonclientComponent,
    DetailDepenseComponent,
    ListeDepenseComponent,
    CreerDepenseComponent,
    CreerVenteComponent,
    ListeVenteComponent,
    DetailVenteComponent,
    DetailBonDeLivraisonComponent,
    ListeBonDeLivraisonComponent,
    CreerBonDeLivraisonComponent,
    CreerCommandeComponent,
    ListeCommandeComponent,
    DetailCommandeComponent,
    AuthentificationComponent,
    EspaceAdminComponent,
<<<<<<< HEAD
    QuantiteMedicamentComponent
=======
    ListeClientComponent,
    DetailClientComponent,
    CreerClientComponent,
    ListeVendeurComponent,
    DetailVendeurComponent,
    CreervendeurComponent

>>>>>>> origin/CYC
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    DashboardModule
  ],
  providers: [

    ServiceauthentificationService,
    ServiceutilisateurService,
    ServicecategorieService,
    ServicerayonService,
    ServicebonClientService,
    ServicecommandeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
