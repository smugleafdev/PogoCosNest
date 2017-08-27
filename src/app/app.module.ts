import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { locationReducer } from './store';
import { MapViewComponent } from './map-view/map-view.component';

import { GoogleMapsService } from './services/google-maps.service';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddSightingComponent } from './add-sighting/add-sighting.component';
import { ListLocationsComponent } from './list-locations/list-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    AddLocationComponent,
    ListLocationsComponent,
    AddSightingComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ root: locationReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [GoogleMapsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
