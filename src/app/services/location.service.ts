import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Principal } from '../models/principal';
import { Location } from '../models/Location';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private currentObjectSubject : BehaviorSubject<Location>;
  private currentObject$: Observable<Location>;

  private locations;
  

  constructor(private http: HttpClient) {
    console.log('in LocationService Constructor');
  }

  getCurrentObjectSubject() {
    return this.currentObjectSubject;
  }

  getLocations() {
    return this.locations;
  }

  getAllLocations() {
    console.log('in LocationService.getAllLocations()');

    return this.http.get(`http://localhost:5000/locations`, {responseType:'json', observe:'response'});
  }

  addLocation(location: Location) {
    return this.http.post(`http://localhost:5000/locations`, location, {responseType:'json', observe:'response'});
  }

}
