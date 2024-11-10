import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inheritance3',
  standalone: true,
  imports: [],
  templateUrl: './inheritance3.component.html',
  styleUrls: ['./inheritance3.component.scss']
})
export class Inheritance3Component {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/inheritenceActivity3']);
  }
}
