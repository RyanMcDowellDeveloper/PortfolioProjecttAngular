import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableMessageComponent } from './reusable-message/reusable-message.component';
import { DemoMaterialModule } from '../../material-module.module';
import { RouterModule } from '@angular/router';
import { LayoutModuleModule } from '../../layout-module/layout-module.module';

@NgModule({
  declarations: [ReusableMessageComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule
  ],
  exports: [ReusableMessageComponent]
})
export class ReusableModalMessageModule { }
