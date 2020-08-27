import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SearchComponent } from './_components/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  // { path: 'user/:id', component: ProductDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
