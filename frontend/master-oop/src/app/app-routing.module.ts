import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DescriptionComponent } from './encapsulation/components/description/description.component';
import { IntroductionComponent } from './encapsulation/components/introduction/introduction.component';
import { OfflineActivityComponent } from './encapsulation/components/offline-activity/offline-activity.component';
import { OnlineActivityComponent } from './encapsulation/components/online-activity/online-activity.component';
import { RealWorldApplicationsComponent } from './encapsulation/components/real-world-applications/real-world-applications.component';
import { SummaryComponent } from './encapsulation/components/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login Page,'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  { path: 'encapsulation/introduction', component: IntroductionComponent },
  { path: 'encapsulation/description', component: DescriptionComponent },
  { path: 'encapsulation/real-world-applications', component: RealWorldApplicationsComponent },
  { path: 'encapsulation/online-activity', component: OnlineActivityComponent },
  { path: 'encapsulation/offline-activity', component: OfflineActivityComponent },
  { path: 'encapsulation/summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
