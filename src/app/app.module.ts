import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { InputFilterPipe } from './input-filter.pipe';
import { DropdownFilterPipe } from './dropdown-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DropdownFilterPipe,
    InputFilterPipe],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
