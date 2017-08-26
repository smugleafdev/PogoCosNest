import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  myString = 'blkahasdf';

  constructor(private maps: GoogleMapsService) {}

  ngOnInit() {
    this.maps.DoThing();
  }
}
