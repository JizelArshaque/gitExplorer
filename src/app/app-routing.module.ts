import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'repository/:id',component:RepositoryComponent},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
