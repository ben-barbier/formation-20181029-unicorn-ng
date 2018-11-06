import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornService} from '../../../shared/services/unicorn.service';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OneYearGuard implements CanActivate {

    constructor(private unicornService: UnicornService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {

        return this.unicornService.get(next.params.id).pipe(
            map((unicorn: Unicorn) => !unicorn.birthyear || unicorn.birthyear < 2017),
            tap((hasOneYean: boolean) => {
                if (!hasOneYean) {
                    this.router.navigate(['home']);
                }
            })
        );

    }
}
