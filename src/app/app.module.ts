import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatRadioModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
