import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit{

  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    console.log(`token is  ${this.route.snapshot.paramMap.get('token')}`);
    console.log(this.route.snapshot.paramMap.get('id'));
  }

}
