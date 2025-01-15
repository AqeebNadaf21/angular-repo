import { Injectable, OnDestroy, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
    providedIn: 'root',
})
export class CurrentVehicleService implements OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    readonly value$: BehaviorSubject<Vehicle|null> = new BehaviorSubject<Vehicle|null>(null);

    get value(): Vehicle|null {
        return this.value$.value;
    }
    set value(value: Vehicle|null) {
        this.value$.next(value);
    }

    constructor(
        @Optional() @SkipSelf() parent: CurrentVehicleService,
    ) {
        if (parent) {
            this.value = parent.value;
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
