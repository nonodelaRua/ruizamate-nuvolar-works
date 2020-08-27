import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  githubUsersListURL:string = 'https://api.github.com/users/nonodelaRua/followers';
  githubUserInfoURL:string = 'https://api.github.com/users/[userName]';

  constructor(private http:HttpClient) {}

  getUserInfo(username) {
    if (username) {
      return this.http.get(this.githubUserInfoURL.replace('[userName]', username));
    }
  }

  getUsers() {
    console.log('Consuming data from user service');
    return this.http.get(this.githubUsersListURL);
  }
}
