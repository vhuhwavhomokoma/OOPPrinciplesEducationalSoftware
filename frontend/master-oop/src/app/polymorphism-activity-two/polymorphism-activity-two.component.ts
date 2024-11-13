import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polymorphism-activity-two',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism-activity-two.component.html',
  styleUrls: ['./polymorphism-activity-two.component.scss']
})
export class PolymorphismActivityTwoComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/polymorphism-game3']);
  }

}
