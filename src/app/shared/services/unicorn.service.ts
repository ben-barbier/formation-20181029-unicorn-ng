import {Injectable} from '@angular/core';
import {Unicorn} from '../models/unicorn.model';
import {HttpClient} from '@angular/common/http';
import {from, merge, Observable, zip} from 'rxjs';
import {catchError, filter, flatMap, map, mergeMap, pluck, reduce, tap, toArray} from 'rxjs/operators';
import {CapacityService} from './capacity.service';
import {Capacity} from '../models/capacity.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {AddUnicorn, EditUnicorn, RemoveUnicorn} from '../../store/actions/unicorns.actions';

@Injectable({
    providedIn: 'root'
})
export class UnicornService {

    constructor(
        private http: HttpClient,
        private capacityService: CapacityService,
        private store: Store<AppState>,
    ) {
    }

    list(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
    }

    listAdoptable(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            flatMap(e => e),
            filter((e: Unicorn) => e.birthyear < new Date().getFullYear()),
            toArray()
        );
    }

    get(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`http://localhost:3000/unicorns/${id}`);
    }

    update(unicorn: Unicorn): Observable<Unicorn> {
        const id = unicorn.id;
        return this.http.put(`http://localhost:3000/unicorns/${id}`, unicorn).pipe(
            tap((u: Unicorn) => {
                this.store.dispatch(new EditUnicorn(u));
            })
        );
    }

    public delete(unicorn: Unicorn): Observable<any> {
        const id = unicorn.id;
        return this.http.delete(`http://localhost:3000/unicorns/${id}`).pipe(
            tap((u: Unicorn) => {
                this.store.dispatch(new RemoveUnicorn(u));
            })
        );
    }

    listWithCapacitiesLabels1(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn): Observable<Unicorn> => {
                const res = {...unicorn};
                return from(res.capacities).pipe(
                    mergeMap((capacityId: number): Observable<string> => {
                        return this.capacityService.get(capacityId).pipe(
                            pluck('label')
                        );
                    }),
                    toArray(),
                    map(capacities => {
                        res.capacitiesLabels = capacities;
                        return res;
                    })
                );
            }),
            toArray(),
        );
    }

    listWithCapacitiesLabels2(): Observable<Unicorn[]> {
        return zip(
            this.list(),
            this.capacityService.list()
        ).pipe(
            map(([unicorns, capacities]): Unicorn[] => {
                return unicorns.map((u: Unicorn): Unicorn => {
                    u.capacities = u.capacities || [];
                    return {
                        ...u, capacitiesLabels: u.capacities.map((c: number): string => {
                            return capacities.find((c2: Capacity) => c2.id === c).label;
                        })
                    };
                });
            })
        );
    }

    getAverageAge(): Observable<number> {
        return this.list().pipe(
            flatMap(e => e),
            reduce((acc: { sumAge, count }, unicorn: Unicorn) => {
                return {
                    sumAge: acc.sumAge + 2018 - unicorn.birthyear,
                    count: acc.count + 1
                };
            }, {sumAge: 0, count: 0}),
            map(e => e.sumAge / e.count)
        );
    }

    public save(unicorn: Unicorn) {
        return this.http.post(`http://localhost:3000/unicorns`, unicorn).pipe(
            tap((u: Unicorn) => {
                this.store.dispatch(new AddUnicorn(u));
            })
        );
    }
}
