import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebProjectsPageRoutingModule } from './web-projects-routing.module';

import { WebProjectsPage } from './web-projects.page';
import { RicochetComponent } from './ricochet/ricochet.component';
import { WebsitesComponent } from './websites/websites.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebProjectsPageRoutingModule
  ],
  declarations: [WebProjectsPage, AllProjectsComponent, RicochetComponent, WebsitesComponent],
  exports: [WebProjectsPage]
})
export class WebProjectsPageModule {}
