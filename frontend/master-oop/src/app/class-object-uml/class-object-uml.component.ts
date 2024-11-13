import { Component, viewChild, ViewEncapsulation, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-class-object-uml',
  standalone: true,
  imports: [],
  templateUrl: './class-object-uml.component.html',
  styleUrls: ['./class-object-uml.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassObjectUmlComponent {

  constructor(private router:Router){}

  ngOnInit(): void {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;

    // Show the modal
    modal.showModal();
  }

  next(){
    this.router.navigate(['/classes_online_game1']);
  }
}
