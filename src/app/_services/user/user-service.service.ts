import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  githubUsersSearchURL:string = 'https://api.github.com/search/users?q=[username]&type=Users?per_page=50';
  githubUserInfoURL:string = 'https://api.github.com/users/[username]';
  githubUserFollowersURL:string = 'https://api.github.com/users/[username]/followers';
  githubUserReposURL:string = 'https://api.github.com/users/[username]/repos';

  constructor(private http:HttpClient) {}

  search(username:string) {
    console.log('Consuming data from user service');
    return this.http.get(this.githubUsersSearchURL.replace('[username]', username));
  }

  getUserInfo(username:string) {
    if (username) {
      return this.http.get(this.githubUserInfoURL.replace('[username]', username));
    }
  }

  getUserFollowers(username:string) {
    if (username) {
      console.log(username);
      return this.http.get(this.githubUserFollowersURL.replace('[username]', username));
    }
  }

  getUserRepos(username:string) {
    if (username) {
      return this.http.get(this.githubUserReposURL.replace('[username]', username));
    }
  }
}
