import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractionComponent } from './abstraction/abstraction.component';
import { ClassObjectUmlComponent } from './class-object-uml/class-object-uml.component';
import { ClassesOfflineComponent } from './classes-offline/classes-offline.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { HomeComponent } from './home/home.component';
import { Inheritance2Component } from './inheritance2/inheritance2.component';
import { Inheritance3Component } from './inheritance3/inheritance3.component';
import { InheritenceComponent } from './inheritence/inheritence.component';
import { LoginComponent } from './login/login.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { RegisterComponent } from './register/register.component';
import { RelationshipsComponent } from './relationships/relationships.component';

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
    path:'inheritence2',
    component:Inheritance2Component,
    title:'Inheritence'
  },
  {
    path:'inheritence3',
    component:Inheritance3Component,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
