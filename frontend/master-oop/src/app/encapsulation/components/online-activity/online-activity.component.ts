import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Define the allowed keys as a union type
type PlaceholderKey = 'accessModifier' | 'balanceField' | 'nameField' | 'getter' | 'setter';

@Component({
  selector: 'app-online-activity',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './online-activity.component.html',
  styleUrls: ['./online-activity.component.scss']
})
export class OnlineActivityComponent implements OnInit {
  
  feedbackMessage: string = 'Drag and drop the snippets into the placeholders!';  // Initial message
  snippets = [
    'public int getAccountNumber() { return accountNumber; }',
    'public String getOwnerName() { return ownerName; }',
    'private int accountNumber;',
    'private String ownerName;'
  ];

  placeholders = [
    { id: 1, name: 'Drop the getter for accountNumber here', correctSnippet: 'public int getAccountNumber() { return accountNumber; }', dropped: false },
    { id: 2, name: 'Drop the setter for accountNumber here', correctSnippet: 'private int accountNumber;', dropped: false },
    { id: 3, name: 'Drop the getter for ownerName here', correctSnippet: 'public String getOwnerName() { return ownerName; }', dropped: false },
    { id: 4, name: 'Drop the setter for ownerName here', correctSnippet: 'private String ownerName;', dropped: false }
  ];

  constructor() { }

  ngOnInit(): void { }

  onDrop(event: CdkDragDrop<string[]>, placeholder: any): void {
    // Check if the dropped snippet matches the correct snippet for the placeholder
    if (event.item.data === placeholder.correctSnippet && !placeholder.dropped) {
      this.feedbackMessage = 'Great job! You’ve completed the activity!';
      placeholder.dropped = true;  // Mark the placeholder as correctly filled
    } else if (!placeholder.dropped) {
      this.feedbackMessage = 'Oops! Try again.';
    }
  }

  isSnippetDropped(placeholder: any): boolean {
    return placeholder.dropped;
  }

  resetActivity(): void {
    // Reset each placeholder's dropped status and set initial feedback message
    this.placeholders.forEach(placeholder => placeholder.dropped = false);
    this.feedbackMessage = 'Drag and drop the snippets into the placeholders!'; // Reset the message
  }

  getCorrectCount(): number {
    return this.placeholders.filter(placeholder => placeholder.dropped).length;
  }
  
  getTotalCount(): number {
    return this.placeholders.length;
  }
  


}
