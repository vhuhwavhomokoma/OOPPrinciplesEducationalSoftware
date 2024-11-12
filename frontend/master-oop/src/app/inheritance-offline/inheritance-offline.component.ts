import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inheritance-offline',
  standalone: true,
  imports: [],
  templateUrl: './inheritance-offline.component.html',
  styleUrls: ['./inheritance-offline.component.scss']
})
export class InheritanceOfflineComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/home']);
  }
}
