import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**COMPONENTS*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

/**MODULES*/
import {AppRoutingModule} from './app-routing.module';
import {RentalModule} from './components/rental/rental.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RentalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
