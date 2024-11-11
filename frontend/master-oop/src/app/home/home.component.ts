import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router){}

  goToClasses(){
    this.router.navigate(['/class_object_uml']);
  }

  goToPolymorphism(){
    this.router.navigate(['/polymorphism']);
  }

  goToRelationships(){
    this.router.navigate(['/relationships']);
  }

  goToInheritance(){
    this.router.navigate(['/inheritence']);
  }

  goToEncapsulation(){
    this.router.navigate(['/encapsulation']);
  }

  goToAbstraction(){
    this.router.navigate(['/abstraction']);
  }
}
