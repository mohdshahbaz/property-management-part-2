import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyManagementComponent } from './property-management/property-management.component';

const routes: Routes = [
  {
  path: "add-property",
  component: AddPropertyComponent
  },
  {
    path: "",
    component: PropertyManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
