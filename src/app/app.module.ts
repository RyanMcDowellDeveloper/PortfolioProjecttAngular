import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModuleModule } from './layout-module/layout-module.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModuleModule,
    HttpClientModule,
    CommonModule 
  ],
  exports: [DemoMaterialModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
