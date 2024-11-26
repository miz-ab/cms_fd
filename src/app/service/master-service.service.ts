import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel, user } from '../model/login-model.model';
import { Customers } from '../model/master.model';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  countervalue=signal<number>(0);
  players=signal([{'id':1,'name':'Sachin'}]);

  constructor(private http: HttpClient) { }

  Proceedlogin(_data: LoginModel) {
    console.log(`enterd data  ${_data}`);
    return _data;
    //return this.http.get<user[]>('http://localhost:3000/user?id=' + _data.username + '&&password=' + _data.password);
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  ProceedRegister(_data: user) {
    console.log(`enterd data ${_data.email} ${_data}`)
    return _data;
    //return this.http.post('http://localhost:3000/user',_data);
  }

  GetallCustomerold(){
    return this.http.get<Customers[]>('https://localhost:7143/api/Customer/GetAll');
  }

  GetallCustomer(){
    let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNzIxMjEyNjE5LCJleHAiOjE3MjEyMTU2MTksImlhdCI6MTcyMTIxMjYxOX0.bZRLSrjebBjSDG6qHHqpg6YkJOQFax3S4b6heMkNZSQ';
    let _head=new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.get<Customers[]>('https://localhost:7143/api/Customer/GetAll',{headers:_head});
  }
}
