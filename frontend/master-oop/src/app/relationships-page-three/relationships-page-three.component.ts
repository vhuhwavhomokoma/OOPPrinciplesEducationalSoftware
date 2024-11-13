import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-relationships-page-three',
  standalone: true,
  imports: [],
  templateUrl: './relationships-page-three.component.html',
  styleUrls: ['./relationships-page-three.component.scss']
})
export class RelationshipsPageThreeComponent {
  constructor(private router:Router){}

  back(){
    this.router.navigate(['/home']);
  }
}
