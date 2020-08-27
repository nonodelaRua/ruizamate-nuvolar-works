import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  usersList:any = [];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {}

  getUsers() {
    this.userService.getUsers().subscribe((resp) => {
      this.usersList = resp;
    });
  }

  viewDetails(id:number) {
    this.router.navigate(['/user-details', id]);
  }

}
