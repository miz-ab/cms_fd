import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, MatButtonModule, MatCardModule, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked{

  color = "color1";
  _red = "red";
  _blue = "blue";
  _green = "green";

  setBlue(){
    this.color = "color1"
  }

  setBrown(){
    this.color = "color2"
  }

  setGreen(){
    this.color = "color3"
  }

  onToggleGroupChange(event: MatButtonToggleModule){
    console.log(`selected toggle value  ${event}`)
  }

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
