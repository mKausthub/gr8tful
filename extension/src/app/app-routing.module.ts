import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemoriesComponent } from './compoents/add-memories/add-memories.component';
import { DashboardComponent } from './compoents/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'add', component: AddMemoriesComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
