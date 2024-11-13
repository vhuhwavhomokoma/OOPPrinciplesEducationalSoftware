import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-polymorphism-game3',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism-game3.component.html',
  styleUrls: ['./polymorphism-game3.component.scss']
})
export class PolymorphismGame3Component {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/polymorphism-activity-three']);
  }

}
