import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  githubUsersURL:string = 'https://api.github.com/users/nonodelaRua/followers';

  constructor(private http:HttpClient) {}

  getUsers() {
    console.log('Consuming data from user service');
    return this.http.get(this.githubUsersURL);
  }
}
