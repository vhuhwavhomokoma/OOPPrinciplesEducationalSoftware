import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inheritance2',
  standalone: true,
  imports: [],
  templateUrl: './inheritance2.component.html',
  styleUrls: ['./inheritance2.component.scss']
})
export class Inheritance2Component {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/inheritenceActivity2']);
  }
}
