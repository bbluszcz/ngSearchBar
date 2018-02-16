import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputFilterPipe } from './input-filter.pipe';
import { DropdownFilterPipe } from './dropdown-filter.pipe';

import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownFilterPipe,
    InputFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
