import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { SignComponent } from './components/sign/sign.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { CompteComponent } from './components/compte/compte.component';
const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "destination", component: DestinationComponent},
  {path: "booking", component: BookingComponent},
  {path: "service", component: ServiceComponent},
  {path: "signUp", component: SignComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent},
  {path: "reclamer", component: ReclamationComponent},

  {path: "modifier", component: CompteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
