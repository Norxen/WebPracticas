import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})

export class LayoutModule { }
