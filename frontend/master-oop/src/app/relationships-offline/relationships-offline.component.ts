import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relationships-offline',
  standalone: true,
  imports: [],
  templateUrl: './relationships-offline.component.html',
  styleUrls: ['./relationships-offline.component.scss']
})
export class RelationshipsOfflineComponent {
  constructor(private router:Router){}

  next(){
    this.router.navigate(['/relationships-page-three']);
  }
}
