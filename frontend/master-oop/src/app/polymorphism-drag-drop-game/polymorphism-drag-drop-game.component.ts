import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polymorphism-drag-drop-game',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism-drag-drop-game.component.html',
  styleUrls: ['./polymorphism-drag-drop-game.component.scss']
})
export class PolymorphismDragDropGameComponent {
  constructor(private router:Router){}
  back(){
    this.router.navigate(['/home']);
  }
}
