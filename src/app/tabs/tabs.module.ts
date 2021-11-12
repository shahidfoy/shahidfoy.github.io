import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { PaymentPortalComponent } from '../payment-portal/payment-portal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    // PaymentPortalComponent
  ],
  declarations: [TabsPage, PaymentPortalComponent]
})
export class TabsPageModule {}
