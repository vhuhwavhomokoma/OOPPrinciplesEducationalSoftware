import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relationships-page-two',
  standalone: true,
  imports: [],
  templateUrl: './relationships-page-two.component.html',
  styleUrls: ['./relationships-page-two.component.scss']
})
export class RelationshipsPageTwoComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['relationships-online']);
  }

  back(){
    this.router.navigate(['/relationships']);
  }
}
