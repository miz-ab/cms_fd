import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { CustomerComponent } from './core/customer/customer.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'customer', component:CustomerComponent}
];
