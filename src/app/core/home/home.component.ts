import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked{

  ngAfterViewChecked(): void {
    console.log("ng after view checked");
  }
  ngAfterViewInit(): void {
    console.log("ng after view init");
  }
  ngAfterContentChecked(): void {
    console.log("ng after content checked");
  }
  ngAfterContentInit(): void {
    console.log("ng after content init");
  }
  ngDoCheck(): void {
    console.log("ng on do check");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on change ");
  }

  ngOnInit(): void {
    console.log("ng on init");
  }

}
