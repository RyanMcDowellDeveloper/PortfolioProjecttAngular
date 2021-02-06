import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModuleModule } from './layout-module/layout-module.module';
import { SideNavComponent } from './layout-module/side-nav/side-nav.component';
import {MaterialtestComponent} from './testing/materialtest/materialtest.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sidenav', component: SideNavComponent },
  { path: 'testttt', component: MaterialtestComponent },
  {
    path: 'sidenav',
    component: SideNavComponent,
    children: [
      {
        path: 'employee-details-table',
        loadChildren: () =>
          import('./employees/employees.module').then(
            m => m.EmployeesModule
          ),          
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    LayoutModuleModule],
  exports: [RouterModule,
  ]
})

export class AppRoutingModule { }
