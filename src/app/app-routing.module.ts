import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { CreateAlarmComponent } from './alarms/create/create.component';
import { SilenceComponent } from './alarms/silence/silence.component';
import { SoundComponent } from './alarms/sound/sound.component';
import { ShutdownMethodComponent } from './alarms/shutdown-method/shutdown-method.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'alarms', component: AlarmsComponent},
  {path:'alarms/create', component: CreateAlarmComponent},
  {path:'alarms/sound', component: SoundComponent},
  {path:'alarms/silence', component: SilenceComponent},
  {path:'alarms/shutdown', component: ShutdownMethodComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'profile', component: ProfileComponent},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
