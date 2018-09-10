import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<HttpResponse<User>>{
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users',{observe:'response'});
  }

}
