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
import { PolymorphismActivityOneComponent } from './polymorphism-activity-one/polymorphism-activity-one.component';
import { PolymorphismActivityTwoComponent } from './polymorphism-activity-two/polymorphism-activity-two.component';
import { PolymorphismActivityThreeComponent } from './polymorphism-activity-three/polymorphism-activity-three.component';
// import { PolymorphismDragDropGameComponent } from './polymorphism-drag-drop-game/polymorphism-drag-drop-game.component';
// import { PolymorphismGame1Component } from './polymorphism-game1/polymorphism-game1.component';
import { PolymorphismGame2Component } from './polymorphism-game2/polymorphism-game2.component';
import { PolymorphismGame3Component } from './polymorphism-game3/polymorphism-game3.component';
import { PolymorphismGame1Component } from './polymorphism-game1/polymorphism-game1.component';



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
    path:'polymorphism-activity-one',
    component:PolymorphismActivityOneComponent,
    title: 'polymorphism activity1'
  },

  {
    path:'polymorphism-activity-two',
    component :PolymorphismActivityTwoComponent,
    title:'polymorphism activity2'
  },

  {
    path:'polymorphism-activity-three',
    component :PolymorphismActivityThreeComponent ,
    title:'polymorphism activity3'
  },

  {
    path:'polymorphism-game1',
    component:PolymorphismGame1Component,
    title:'polymorphism game1'

  },

  {
    path:'polymorphism-game2',
    component:PolymorphismGame2Component,
    title:'polymorphism game2'

  },

  {
    path:'polymorphism-game3',
    component:PolymorphismGame3Component,
    title:'polymorphism game3'

  },

  // {
  //   path:'polymorphism-drag-drop-game',
  //   component:PolymorphismDragDropGameComponent,
  //   title:'online-activity'

  // },


  
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
