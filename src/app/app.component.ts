import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from 'src/app/_services/theme/theme-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  title = 'ruizamate-nuvolar-works';
  // themeColor:string = 'primary';

  constructor(
    private themeService: ThemeService,
    private router: Router) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  home() {
    this.router.navigate(['/']);
  }
}
