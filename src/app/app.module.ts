import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular imports
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';

// Components
import { SearchComponent } from './_components/search/search.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';


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
    HttpClientModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
