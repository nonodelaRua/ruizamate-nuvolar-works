import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SearchComponent } from './_components/search/search.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'user/:username', component: UserDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
