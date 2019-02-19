import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputersComponent } from './Components/computers/computers.component';
import { ComputerDetailsComponent } from './Components/computer-details/computer-details.component';

const routes: Routes = [
  {path: '', component: ComputersComponent},
  {path: 'product/:id', component: ComputerDetailsComponent},
  {path: '**', component: ComputersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
