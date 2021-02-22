import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module.module';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ SideNavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DemoMaterialModule
  ],
  exports: [
    SideNavComponent,
    FooterComponent,
  ]
})
export class LayoutModuleModule { }
 