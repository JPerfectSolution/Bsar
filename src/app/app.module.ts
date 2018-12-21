import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { Maket_1Component } from './components/maket_1/maket_1.component';
import { Maket_2Component } from './components/maket_2/maket_2.component';
import { Maket_3Component } from './components/maket_3/maket_3.component';
import {MatTabsModule} from '@angular/material/tabs';

import { Maket4Component } from './components/maket-4/maket-4.component';
import { Maket4_2Component } from './components/maket-4-2/maket-4.component';
import { Maket4_3Component } from './components/maket-4-3/maket-4.component';
import { Maket4_4Component } from './components/maket-4-4/maket-4.component';
import { Maket4_5Component } from './components/maket-4-5/maket-4.component';

import { Maket5Component } from './components/maket_5/maket_5.component';
import { Maket6Component } from './components/maket_6/maket_6.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      Maket_1Component,
      Maket_2Component,
      Maket_3Component,
      Maket4Component,
      Maket4_2Component,
      Maket4_3Component,
      Maket4_4Component,
      Maket4_5Component,
      Maket5Component,
      Maket6Component
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatTabsModule,
      MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
