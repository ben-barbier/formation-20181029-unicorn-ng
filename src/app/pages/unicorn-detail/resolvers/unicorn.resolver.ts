import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {Observable} from 'rxjs';
import {UnicornService} from '../../../shared/services/unicorn.service';

@Injectable({
    providedIn: 'root'
})
export class UnicornResolver implements Resolve<Unicorn> {

    constructor(private unicornService: UnicornService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Unicorn> | Promise<Unicorn> | Unicorn {
        return this.unicornService.get(route.params.id);
    }
}
