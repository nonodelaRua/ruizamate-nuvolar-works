import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular imports
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonToggleModule, MatSlideToggleModule, MatIconModule } from '@angular/material';

// Components
import { SearchComponent } from './_components/search/search.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { ThemeService } from './_services/theme/theme-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
