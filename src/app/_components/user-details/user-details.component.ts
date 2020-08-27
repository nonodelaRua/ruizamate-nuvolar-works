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
      });
    });
  }

}