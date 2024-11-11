import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractionComponent } from './abstraction/abstraction.component';
import { ClassObjectUmlComponent } from './class-object-uml/class-object-uml.component';
import { ClassesOfflineComponent } from './classes-offline/classes-offline.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { HomeComponent } from './home/home.component';
import { InheritanceActivity3Component } from './inheritance-activity3/inheritance-activity3.component';
import { InheritanceOfflineComponent } from './inheritance-offline/inheritance-offline.component';
import { Inheritance2Component } from './inheritance2/inheritance2.component';
import { Inheritance3Component } from './inheritance3/inheritance3.component';
import { InheritenceComponent } from './inheritence/inheritence.component';
import { InhertitanceActivity1Component } from './inhertitance-activity1/inhertitance-activity1.component';
import { InhertitanceActivity2Component } from './inhertitance-activity2/inhertitance-activity2.component';
import { LoginComponent } from './login/login.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { RegisterComponent } from './register/register.component';
import { RelationshipsComponent } from './relationships/relationships.component';
import { ClassesOnlineGame2Component } from './classes-online-game2/classes-online-game2.component';
import { ClassesOnlineGame1Component } from './classes-online-game1/classes-online-game1.component';
import { ObjectsComponent } from './objects/objects.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { PolymorphismActivityOneComponent } from './polymorphism-activity-one/polymorphism-activity-one.component';
import { PolymorphismActivityTwoComponent } from './polymorphism-activity-two/polymorphism-activity-two.component';
import { PolymorphismActivityThreeComponent } from './polymorphism-activity-three/polymorphism-activity-three.component';
import { PolymorphismDragDropGameComponent } from './polymorphism-drag-drop-game/polymorphism-drag-drop-game.component';


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
    path:'home',
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
    title:'Class Content'
  },
  {
    path:'encapsulation',
    component: EncapsulationComponent,
    title:'Encapsulation'
  },
  {
    path:'inheritance',
    component:InheritenceComponent,
    title:'Inheritance'
  },
  {
    path:'inheritence2',
    component:Inheritance2Component,
    title:'Inheritance'
  },
  {
    path:'inheritence3',
    component:Inheritance3Component,
    title:'Inheritance'
  },
  {
    path:'inheritenceActivity1',
    component:InhertitanceActivity1Component,
    title:'Inheritance'
  },
  {
    path:'inheritenceActivity2',
    component:InhertitanceActivity2Component,
    title:'Inheritance'
  },
  {
    path:'inheritenceActivity3',
    component:InheritanceActivity3Component,
    title:'Inheritance'
  },
  {
    path:'inheritenceOfflineActivity',
    component:InheritanceOfflineComponent,
    title:'Inheritance'
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
    path:'polymorphism-drag-drop-game',
    component:PolymorphismDragDropGameComponent,
    title:'online-activity'

  },
  
  {
    path:'relationships',
    component:RelationshipsComponent,
    title:'Relationships'
  },
  {
    path:'classes_offline',
    component: ClassesOfflineComponent,
    title:'Offline Activities'
  },
  {
    path:'classes_online_game2',
    component: ClassesOnlineGame2Component,
    title:'Objects Game 2'
  },
  {
    path:'classes_online_game1',
    component: ClassesOnlineGame1Component,
    title:'Classes Game 1'
  },
  {
    path:'objects',
    component:ObjectsComponent,
    title:'Objects'
  },
  {
    path:'diagrams',
    component:DiagramsComponent,
    title:'Diagrams'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
