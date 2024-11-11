import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AbstractionComponent } from './abstraction/abstraction.component';
import { ClassObjectUmlComponent } from './class-object-uml/class-object-uml.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InheritenceComponent } from './inheritence/inheritence.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { RelationshipsComponent } from './relationships/relationships.component';
import { ClassesOfflineComponent } from './classes-offline/classes-offline.component';
import { RelationshipsPageTwoComponent} from './relationships-page-two/relationships-page-two.component';
import { RelationshipsPageThreeComponent } from './relationships-page-three/relationships-page-three.component';
import { RelationshipsOnlineComponent } from './relationships-online/relationships-online.component';
import { RelationshipsOfflineComponent } from './relationships-offline/relationships-offline.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    title:'Login Page'
  },
  {
    path:'register',
    component: RegisterComponent,
    title:'Register'
  },
  {
    path:'homePage',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:'abstraction',
    component:AbstractionComponent,
    title:'Abstraction'
  },
  {
    path:'class_object_uml',
    component: ClassObjectUmlComponent,
    title:'Classes,Objects and UML'
  },
  {
    path:'encapsulation',
    component: EncapsulationComponent,
    title:'Encapsulation'
  },
  {
    path:'inheritence',
    component:InheritenceComponent,
    title:'Inheritence'
  },
  {
    path:'polymorphism',
    component:PolymorphismComponent,
    title:'Polymorphism'
  },
  {
    path:'relationships',
    component:RelationshipsComponent,
    title:'Relationships'
  },
  {
    path:'classes-offline',
    component: ClassesOfflineComponent,
    title:'Offline Activities'
  },

{
  path:'relationships-page-two',
  component: RelationshipsPageTwoComponent,
  title:'Relationships PageTwo',
},

{
 path:'relationships-page-three',
 component: RelationshipsPageThreeComponent,
 title:'Relationships PageThree',
},
{
 path:'relationships-online',
 component: RelationshipsOnlineComponent,
 title:'Relationships Online Activity',
},

{
 path:'relationships-offline',
 component: RelationshipsOfflineComponent,
 title:'Relationships Offline Activity',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
