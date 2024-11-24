import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { CustomerComponent } from './core/customer/customer.component';
import { AddCustomerComponent } from './core/add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'customer', component:CustomerComponent,
        children: [
            {path: 'add', component:AddCustomerComponent},
            {path: 'edit', component:EditCustomerComponent}
        ]
    },
    //{path: 'customer/:token/:id', component:CustomerComponent}
];
