import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Unicorn} from '../shared/models/unicorn.model';

@Component({
    selector: 'uni-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {


    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    public myUnicorn: Unicorn;

    public alertHb() {
        alert('HB !');
    }

    constructor(private breakpointObserver: BreakpointObserver) {
        this.myUnicorn = {
            id: 1,
            name: 'Baby',
            birthyear: 2018,
            weight: 10,
            photo: 'http://0.0.0.0:3000/unicorns/photos/unicorn-1.jpg',
            hobbies: [
                'Sleep',
                'Cry'
            ], capacities: [
                1,
                2
            ]
        };
    }

}
