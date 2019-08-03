import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExitsts = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExitsts) {
            this.router.navigate(['/404']);
        }

        return eventExitsts;
    }
}