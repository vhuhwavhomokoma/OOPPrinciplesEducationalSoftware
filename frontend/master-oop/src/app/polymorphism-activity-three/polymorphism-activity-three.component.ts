import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-polymorphism-activity-three',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism-activity-three.component.html',
  styleUrls: ['./polymorphism-activity-three.component.scss']
})
export class PolymorphismActivityThreeComponent {
  constructor(private router:Router){}

  back(){
    this.router.navigate(['/home']);
  }
}
