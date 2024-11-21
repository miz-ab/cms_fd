import {  } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {

  users = ['User', 'Admin', 'Cashire']

  message = 'message from test component';

  status = false;

  counter = 0;

   models = [
      {id:'tsx11', name: 'hp', year: '2024'},
      {id:'tsx12', name: 'dell', year: '2023'},
      {id:'tsx13', name: 'lenovo', year: '2022'},
      {id:'tsx14', name: 'huawei', year: '2021'},
      {id:'tsx15', name: 'mac', year: '2020'},
  ]

   great = () => this.counter++;

}
