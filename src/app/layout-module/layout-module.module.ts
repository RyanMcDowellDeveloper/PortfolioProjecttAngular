import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module.module';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ SideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DemoMaterialModule
  ],
  exports: [
    SideNavComponent,
    DemoMaterialModule
  ]
})
export class LayoutModuleModule { }
 