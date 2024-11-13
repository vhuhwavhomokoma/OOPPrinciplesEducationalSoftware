import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
selector: 'app-relationships-online',
standalone: true,
imports: [FormsModule, CommonModule], // Added CommonModule to imports
templateUrl: './relationships-online.component.html',
styleUrls: ['./relationships-online.component.scss'],
})
export class RelationshipsOnlineComponent {
correctAnswers: string[] = ['inheritance', 'association', 'aggregation', 'composition', 'dependency', 'association', 'inheritance'];
userAnswers: string[] = ['', '', '', '', '', '', ''];
isCorrect: boolean | null = null;
feedbackMessage: string = '';
checkAnswers(): void {

    this.isCorrect = this.userAnswers.every(
      (answer, index) => answer.toLowerCase().trim() === this.correctAnswers[index]
    );


    this.feedbackMessage = this.isCorrect
      ? 'Great job! Your answers are correct.'
      : 'Try again. Some answers are incorrect. Answers are: 1. Inheritance 2. Association 3. Aggregation 4. Composition 5. Dependency 6.Association 7. Inheritance ';
  }

  constructor(private router:Router){}
  next(){
    this.router.navigate(['/relationships-offline']);
  }


}
