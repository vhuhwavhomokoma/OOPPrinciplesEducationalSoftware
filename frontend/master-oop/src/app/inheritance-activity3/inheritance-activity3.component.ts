import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-inheritance-activity3',
  standalone: true,
  imports: [CdkDrag,CdkDropList,CommonModule],
  templateUrl: './inheritance-activity3.component.html',
  styleUrls: ['./inheritance-activity3.component.scss']
})
export class InheritanceActivity3Component {
  correctMapping: { [key: string]: string } = {
    'lion': 'Mammal',
    'elephant': 'Mammal',
    'owl': 'Bird',
    'hen': 'Bird',
    'turtle': 'Reptile',
    'Animal': 'Animal',
    'Mammal': 'Mammal',
    'Bird': 'Bird',
    'Reptile': 'Reptile'
  };

  // Function to handle drop and check if the item is placed correctly
  drop(event: CdkDragDrop<string[]>, targetCategory: string) {
    const itemName = event.item.element.nativeElement.innerText.trim();
    
    // Check if item is placed in the correct category
    if (this.correctMapping[itemName] === targetCategory) {
      event.container.element.nativeElement.style.backgroundColor = 'green';
    } else {
      event.container.element.nativeElement.style.backgroundColor = 'red';
    }
  }

}
