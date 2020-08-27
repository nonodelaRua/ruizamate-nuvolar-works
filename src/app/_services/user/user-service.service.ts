import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  githubUsersListURL:string = 'https://api.github.com/users';
  githubUserInfoURL:string = 'https://api.github.com/users/[username]';
  githubUserFollowersURL:string = 'https://api.github.com/users/[username]/followers';
  githubUserReposURL:string = 'https://api.github.com/users/[username]/repos';

  constructor(private http:HttpClient) {}

  getUserInfo(username) {
    if (username) {
      return this.http.get(this.githubUserInfoURL.replace('[username]', username));
    }
  }

  getUserFollowers(username) {
    if (username) {
      console.log(username);
      return this.http.get(this.githubUserFollowersURL.replace('[username]', username));
    }
  }

  getUserRepos(username) {
    if (username) {
      return this.http.get(this.githubUserReposURL.replace('[username]', username));
    }
  }

  getUsers() {
    console.log('Consuming data from user service');
    return this.http.get(this.githubUsersListURL);
  }
}
