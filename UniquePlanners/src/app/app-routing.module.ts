import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { KoriceComponent } from './admin-panel/korice/korice.component';
import { PlaneriComponent } from './admin-panel/planeri/planeri.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'admin-panel' , component: AdminPanelComponent},
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    children: [
      { path: 'planeri', component: PlaneriComponent },
      { path: 'korice', component: KoriceComponent },
      { path: '', redirectTo: 'planeri', pathMatch: 'full' } // Default route
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
