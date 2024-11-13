import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule],
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class EncapsulationComponent {

}
