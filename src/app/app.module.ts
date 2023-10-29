import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TituloComponent } from './titulo/titulo.component';
import { BotonesComponent } from './botones/botones.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { BarritaComponent } from './barrita/barrita.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { CartasComponent } from './cartas/cartas.component';
import { CuboComponent } from './cubo/cubo.component';
import { LiquidoComponent } from './liquido/liquido.component';
import { FotomanchaComponent } from './fotomancha/fotomancha.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SliderComponent,
    GaleriaComponent,
    TituloComponent,
    BotonesComponent,
    MemoriaComponent,
    BarritaComponent,
    PerfilesComponent,
    CartasComponent,
    CuboComponent,
    LiquidoComponent,
    FotomanchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
