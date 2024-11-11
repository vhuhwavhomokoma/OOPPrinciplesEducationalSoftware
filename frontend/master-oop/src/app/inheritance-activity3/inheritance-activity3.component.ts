import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-inheritance-activity3',
  standalone: true,
  imports: [CdkDrag,CdkDropList,CommonModule,FormsModule],
  templateUrl: './inheritance-activity3.component.html',
  styleUrls: ['./inheritance-activity3.component.scss']
})
export class InheritanceActivity3Component {
  inputText: string = '';
  inputChild1: string = '';
  inputChild2: string = '';
  inputChild3: string = '';
  inputChild4: string = '';
  inputChild5: string = '';
  inputChild6: string = '';
  inputChild7: string = '';
  inputChild8: string = '';
  inputChild9: string = '';

  mammals = ["lion","elephant"]
  birds = ["owl","chicken"]
  reptile = ["turtle"]


  
  isParentMatching(): boolean {
    if(this.inputText.toLowerCase() === 'animal'){
      return true;
    }
    return false;
  }


  isChildMatching1(): boolean {
    this.inputChild1 = this.inputChild1.toLowerCase();
    if(this.inputText.toLowerCase() === 'bird'){
      return true;
    }
    return false;
  }

  isChildMatching2(): boolean {
    this.inputChild2 = this.inputChild2.toLowerCase();
    if(this.inputText.toLowerCase() === 'mammal'){
      return true;
    }
    return false;
  }

  isChildMatching3(): boolean {
    this.inputChild3 = this.inputChild3.toLowerCase();
    if(this.inputText.toLowerCase() === 'reptile'){
      return true;
    }
    return false;
  }

  isChildMatching4(): boolean {
    this.inputChild4 = this.inputChild4.toLowerCase();
    if(this.birds.includes(this.inputChild4)){
      return true;
    }
    return false;
  }
  isChildMatching5(): boolean {
    this.inputChild5 = this.inputChild5.toLowerCase();
    if(this.birds.includes(this.inputChild5)){
      return true;
    }
    return false;
  }
  isChildMatching6(): boolean {
    this.inputChild6 = this.inputChild6.toLowerCase();
    if(this.mammals.includes(this.inputChild6)){
      return true;
    }
    return false;
  }
  isChildMatching7(): boolean {
    this.inputChild7 = this.inputChild7.toLowerCase();
    if(this.mammals.includes(this.inputChild7)){
      return true;
    }
    return false;
  }
  isChildMatching8(): boolean {
    this.inputChild8 = this.inputChild8.toLowerCase();
    if(this.reptile.includes(this.inputChild8)){
      return true;
    }
    return false;
  }
  isChildMatching9(): boolean {
    this.inputChild9 = this.inputChild9.toLowerCase();
    if(this.reptile.includes(this.inputChild9)){
      return true;
    }
    return false;
  }


}
