import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from './coreComponents/test-component/test-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent, MatSlideToggleModule, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cms';
  name = signal('value from signal');
}
