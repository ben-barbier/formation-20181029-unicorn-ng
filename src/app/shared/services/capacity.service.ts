import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from '../models/capacity.model';

@Injectable({
    providedIn: 'root'
})
export class CapacityService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<Capacity[]> {
        return this.http.get<Capacity[]>('http://localhost:3000/capacities');
    }

    get(capacityId: number): Observable<Capacity> {
        return this.http.get<Capacity>(`http://localhost:3000/capacities/${capacityId}`);
    }

}
