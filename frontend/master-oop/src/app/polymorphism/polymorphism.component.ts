import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polymorphism',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism.component.html',
  styleUrls: ['./polymorphism.component.scss']
})
export class PolymorphismComponent {

  constructor(private router:Router){}
  next(){
    this.router.navigate(['/polymorphism-activity-one']);
  }

  back(){
    this.router.navigate(['/home']);
  }
}
