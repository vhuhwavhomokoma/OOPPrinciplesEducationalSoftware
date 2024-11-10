import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objects',
  standalone: true,
  imports: [],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.scss'
})
export class ObjectsComponent {

  constructor(private router:Router){}

  next(){
    this.router.navigate(['/classes_online_game2']);
  }
  
}
