import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-object-uml',
  standalone: true,
  imports: [],
  templateUrl: './class-object-uml.component.html',
  styleUrls: ['./class-object-uml.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassObjectUmlComponent {

  constructor(private router:Router){}

  next(){
    this.router.navigate(['/classes_online_game1']);
  }

  back(){
    this.router.navigate(['/home']);
  }

}
