import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDashboardComponent } from './shared/components/table-dashboard/table-dashboard.component';
import { TableFormComponent } from './shared/components/table-form/table-form.component';

const routes: Routes = [
  {
    path: '',
    component: TableDashboardComponent,
  },
  {
    path: 'table',
    component: TableDashboardComponent,
  },
  {
    path: 'table/add',
    component: TableFormComponent,
  },
  {
    path: 'table/:tableId/edit',
    component: TableFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
