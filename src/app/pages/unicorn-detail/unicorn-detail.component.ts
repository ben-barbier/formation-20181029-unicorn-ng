import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {UnicornService} from '../../shared/services/unicorn.service';

@Component({
    selector: 'uni-unicorn-detail',
    templateUrl: './unicorn-detail.component.html',
    styleUrls: ['./unicorn-detail.component.scss']
})
export class UnicornDetailComponent {

    public unicorn: Unicorn;

    @Output()
    public ageUpdated = new EventEmitter();

    public color = 'red';

    public happyBirthday() {
        console.log('happyBirthday !');
        this.ageUpdated.emit();
    }

    constructor(route: ActivatedRoute) {

        route.data.subscribe((data: Data) => {
            this.unicorn = data.unicorn;
        });

    }
}
