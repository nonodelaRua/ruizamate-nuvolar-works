import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  username:string = '';
  value:string = '';
  usersList:any = [];
  total:number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {}

  search() {
    this.userService.search(this.username).subscribe((resp) => {
      this.usersList = resp['items'];
      this.total = this.usersList.length;
    });
  }

  goTo(username:string) {
    this.router.navigate(['/user', username]);
  }

}
