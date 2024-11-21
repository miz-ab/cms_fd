import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from './coreComponents/test-component/test-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent, MatSlideToggleModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cms';
  name = signal('value from signal');
}
