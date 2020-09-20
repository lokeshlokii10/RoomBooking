import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomBookingComponent } from './room-booking/room-booking.component';


const routes: Routes = [
  {
    path: 'rooms',
    component: RoomBookingComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
