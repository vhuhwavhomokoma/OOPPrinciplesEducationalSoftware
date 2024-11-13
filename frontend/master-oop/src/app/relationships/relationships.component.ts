import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relationships',
  standalone: true,
  imports: [],
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})

export class RelationshipsComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['relationships-page-two']);
  }

  back(){
    this.router.navigate(['/home']);
  }


}


