import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuGridComponent } from './menu-grid/menu-grid.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule,
  ],
  declarations: [AppComponent, MenuDetailComponent, MenuGridComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
