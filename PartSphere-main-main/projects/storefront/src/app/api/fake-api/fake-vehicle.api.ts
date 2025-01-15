import { Injectable } from '@angular/core';
import { VehicleApi } from '../base';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import {
    getMakes,
    getModels,
    getVehicleByVin,
    getVehicles,
    getYears,
    getUserVehicles,
    removeUserVehicles,
    addUserVehicles,
} from '../../../fake-server/endpoints';


@Injectable()
export class FakeVehicleApi extends VehicleApi {
    private reloadUserVehicles: BehaviorSubject<void> = new BehaviorSubject<void>(void null);

    private currentVehicleSubject: BehaviorSubject<Vehicle|null> = new BehaviorSubject<Vehicle|null>(null);

    userVehicles$: Observable<Vehicle[]> = this.reloadUserVehicles.pipe(
        switchMap(() => getUserVehicles()),
        shareReplay(1),
    );

    currentVehicle$: Observable<Vehicle|null> = this.currentVehicleSubject.pipe(
        switchMap(currentVehicle => this.userVehicles$.pipe(
            map(vehicles => vehicles.find(x => currentVehicle && x.id === currentVehicle.id) || null),
        )),
    );

    constructor() {
        super();
    }

    getYears(): Observable<number[]> {
        return getYears();
    }

    getMakes(year: number): Observable<string[]> {
        return getMakes(year);
    }

    getModels(year: number, make: string): Observable<string[]> {
        return getModels(year, make);
    }

    getVehicles(year: number, make: string, model: string): Observable<Vehicle[]> {
        return getVehicles(year, make, model);
    }

    getVehicleByVin(vin: string): Observable<Vehicle> {
        return getVehicleByVin(vin);
    }

    addUserVehicle(vehicleId: number): Observable<void> {
        return addUserVehicles(vehicleId).pipe(
            tap(() => this.reloadUserVehicles.next()),
        );
    }

    removeUserVehicle(vehicleId: number): Observable<void> {
        return removeUserVehicles(vehicleId).pipe(
            tap(() => this.reloadUserVehicles.next()),
        );
    }

    setCurrentVehicle(vehicle: Vehicle): void {
        this.currentVehicleSubject.next(vehicle);
    }
}
