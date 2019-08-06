import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private event: EventService) {

    } 
    resolve() {
        return this.event.getEvents().pipe(map(events => events));
    }
}