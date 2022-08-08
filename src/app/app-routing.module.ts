import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserlistComponent } from './works/userlist/userlist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'works/:category', component: WorksComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/works/cenzor' },
  // { path: 'cenzor', component: CenzorComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'cenzor', component: CenzorComponent },
  { path: 'tasklist', component: TasklistComponent }
  // { path: 'works/:userlist', component: UserlistComponent },
  // { path: 'works/:tasklist', component: TasklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
