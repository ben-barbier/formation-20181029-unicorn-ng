import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';

@Component({
    selector: 'uni-unicorn-detail',
    templateUrl: './unicorn-detail.component.html',
    styleUrls: ['./unicorn-detail.component.scss']
})
export class UnicornDetailComponent {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public ageUpdated = new EventEmitter();

    public color = 'red';

    public happyBirthday() {
        console.log('happyBirthday !');
        this.ageUpdated.emit();
    }
}
