import { LoginKeyModalComponent } from './login-key-modal/login-key-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { MenuComponent } from '../menu/menu.component';
import { NewTableComponent } from './new-requests/new-table/new-table.component';
import { ProgressTableComponent } from './in-progress/progress-table/progress-table.component';
import { InProgressModalComponent } from './in-progress/in-progress-modal/in-progress-modal.component';
import { NewRequestModalComponent } from './new-requests/new-request-modal/new-request-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, MenuComponent, NewTableComponent, ProgressTableComponent, InProgressModalComponent, NewRequestModalComponent, LoginKeyModalComponent],
  entryComponents: []
})
export class DashboardPageModule {}
