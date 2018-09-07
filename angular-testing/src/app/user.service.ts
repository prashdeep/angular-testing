import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /*getAllUsers():Observable<HttpResponse<User>>{
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users',{observe:'response'});
  }*/

  getAllUsers():void{console.log('came inside the actual service method....')}

}
