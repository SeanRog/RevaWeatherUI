import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/Location';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  locations;

  locationToAdd: Location;

  constructor(private locationService: LocationService) {

    this.locationToAdd = {
      city: 'chicago',
      state: 'illinois',
      country: 'us',
      locationZipCode: '36392'
    };

    

  }

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(
      resp => {
        this.locations = resp.body;
      },
      err => {
        console.log('status: ' + err.status);
        console.log(err.error.error);
        console.log('message: ' + err.error.message);
      }
    )
  }

  



}
