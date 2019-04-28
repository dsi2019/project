import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeStaffPage } from './home-staff';

@NgModule({
  declarations: [
    HomeStaffPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeStaffPage),
  ],
})
export class HomeStaffPageModule {}
