import { AppRoutingModule } from './app-routing.module';
import { novaTransferenciaComponent } from './nova-transferencia/nota-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';

registerLocaleData(localPt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    novaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
