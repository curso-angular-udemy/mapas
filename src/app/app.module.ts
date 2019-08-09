// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { EditComponent } from './components/mapa/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';


@NgModule({
  entryComponents: [
    EditComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apikey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
