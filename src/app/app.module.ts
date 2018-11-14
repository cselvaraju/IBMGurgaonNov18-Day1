import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { manualcomponent } from './components/manualcomponent/manualcomponent';
import { DemoComponent } from './components/demo/demo.component';
import { MylistComponent } from './components/mylist/mylist.component';

@NgModule({
  declarations: [
    AppComponent,
    manualcomponent,
    DemoComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
