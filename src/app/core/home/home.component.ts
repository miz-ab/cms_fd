import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgClass, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, MatButtonModule, MatCardModule, NgClass, NgIf,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked{

  color = "color1";
  istrue = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

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
