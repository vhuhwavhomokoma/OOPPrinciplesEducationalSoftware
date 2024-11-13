import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-polymorphism-activity-one',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism-activity-one.component.html',
  styleUrls:['./polymorphism-activity-one.component.scss'] 
})
export class PolymorphismActivityOneComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/polymorphism-game2']);
  }

  back(){
    this.router.navigate(['/polymorphism']);
  }
}
