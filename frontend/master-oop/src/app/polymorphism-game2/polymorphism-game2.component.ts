import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polymorphism-game2',
  templateUrl: './polymorphism-game2.component.html',
  styleUrls: ['./polymorphism-game2.component.scss']
})
export class PolymorphismGame2Component {
  questions = [
    { text: 'Static polymorphism is also known as early binding.', answer: 'Static', userAnswer: '' },
    { text: 'In dynamic polymorphism, the method call is determined during execution.', answer: 'Dynamic', userAnswer: '' },
    { text: 'Function overloading is a form of static polymorphism.', answer: 'Function', userAnswer: '' },
    { text: 'Dynamic polymorphism is also known as late binding.', answer: 'late', userAnswer: '' },
    { text: 'Method overriding is the process of a subclass providing a specific implementation of a method already defined in its superclass.', answer: 'Method Overriding', userAnswer: '' }
  ];
  
  score = 0;
  scoreMessage = '';
  scoreVisible = false;

  constructor(private router:Router){}
  next(){
    this.router.navigate(['/polymorphism-activity-two']);
  }

  checkAnswers() {
    this.score = this.questions.reduce((acc, question) => {
      return acc + (question.userAnswer.trim().toLowerCase() === question.answer.toLowerCase() ? 1 : 0);
    }, 0);

    this.scoreMessage = `Score: ${this.score}/5 - ` + (this.score === 5 ? "You’re a polymorphism pro! 🎉" : "Keep trying, hero! 💪");
    this.scoreVisible = true;

    // Play sounds and show sparkles if all answers are correct
    if (this.score === 5) {
      this.playSound('celebrationSound');
      this.createSparkles();
    }
  }

  playSound(soundId: string) {
    const sound = document.getElementById(soundId) as HTMLAudioElement;
    sound?.play();
  }

  createSparkles() {
    const sparkleContainer = document.getElementById('sparkles');
    if (!sparkleContainer) return;

    sparkleContainer.innerHTML = '';
    sparkleContainer.style.display = 'block';

    const emojis = ["⭐️", "👏"];
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.color = i % 2 === 0 ? 'red' : 'green';
      sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
      sparkleContainer.appendChild(sparkle);
    }

    setTimeout(() => {
      sparkleContainer.style.display = 'none';
    }, 3000);
  }
}
