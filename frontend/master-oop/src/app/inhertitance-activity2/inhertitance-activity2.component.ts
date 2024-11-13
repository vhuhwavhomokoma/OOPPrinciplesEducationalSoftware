import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface ImageType {
  imageUrl: string;
  type: string;
}


@Component({
  selector: 'app-inhertitance-activity2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inhertitance-activity2.component.html',
  styleUrls: ['./inhertitance-activity2.component.scss']
})
export class InhertitanceActivity2Component {
  TotalMarks:number = 0; //Tally of total marks for activity
  isVisible = false;
  imageTypes: ImageType[] = [
    { imageUrl: 'assets/multi.png', type: 'Multilevel' },
    { imageUrl: 'assets/hierarchy.png', type: 'Hierarchical' },
    { imageUrl: 'assets/Single.png', type: 'Single' },
    { imageUrl: 'assets/level.png', type: 'Multiple' },
    { imageUrl: 'assets/hybrid.png', type: 'Hybrid' },

  ];

  selectedTypes: { [key: string]: string } = {};
  correctMatches: Set<string> = new Set();

  onSelectType(imageUrl: string, event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Type assertion
    const selectedType = selectElement.value; // Extract value
  
    this.selectedTypes[imageUrl] = selectedType;
  
    // Check for a correct match
    if (this.imageTypes.find(imageType => imageType.imageUrl === imageUrl)?.type === selectedType) {
      this.TotalMarks+=1;
      this.correctMatches.add(imageUrl);
    } else {
      this.correctMatches.delete(imageUrl);
    }
  }
  

  isCorrectMatch(imageUrl: string) {
    if(this.correctMatches.has(imageUrl)){
      
      return true;
    }
    return false;
  }

  marks(){
    this.isVisible = true;
  }
  
  
  
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/inheritence3']);
  }


}
