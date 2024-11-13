import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inheritence',
  standalone: true,
  imports: [],
  templateUrl: './inheritence.component.html',
  styleUrls: ['./inheritence.component.scss']
})
export class InheritenceComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/inheritenceActivity1']);
  }

  back(){
    this.router.navigate(['/home']);
  }
}
