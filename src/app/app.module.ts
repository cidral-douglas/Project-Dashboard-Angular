import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { MenuLateralComponent } from './barra-nav/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ResumoService} from './resumo/resumo.service';
import { ConsultaService} from './consulta/consulta.service';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoService} from './faturamento/faturamento.service';


@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavComponent,
    MenuLateralComponent,
    ResumoComponent,
    ConsultaComponent,
    FaturamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumoService, ConsultaService, FaturamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
