import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  username: string;
  user: any = {};
  followers: any = [];
  repos: any = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.userService.getUserInfo(this.username).subscribe((resp) => {
        this.user = resp;
        console.log(this.user);
        this.getFollowers();
        this.getRepos();
      });
    });
  }

  getFollowers() {
    console.log(this.username);
    this.userService.getUserFollowers(this.username).subscribe((resp) => {
      this.followers = resp;
      console.log(this.followers);
    });
  }

  getRepos() {
    this.userService.getUserRepos(this.username).subscribe((resp) => {
      this.repos = resp;
      console.log(this.repos);
    });
  }

}