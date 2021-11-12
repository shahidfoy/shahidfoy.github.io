import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { RicochetComponent } from './ricochet/ricochet.component';

import { WebProjectsPage } from './web-projects.page';
import { WebsitesComponent } from './websites/websites.component';

const routes: Routes = [
  {
    path: '',
    component: WebProjectsPage,
    children: [
      {
        path: '', redirectTo: 'all', pathMatch: 'full'
      },
      {
        path: 'all',
        component: AllProjectsComponent
      },
      {
        path: 'ricochet',
        component: RicochetComponent
      },
      {
        path: 'websites',
        component: WebsitesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebProjectsPageRoutingModule {}
