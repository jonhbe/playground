import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './nav/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, RouterLink, NavigationComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
}
