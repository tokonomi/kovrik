import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatSelectModule} from '@angular/material/select'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatTabsModule} from '@angular/material/tabs'

const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule,
  MatGridListModule,
  MatTabsModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
