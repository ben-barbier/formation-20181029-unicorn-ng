import {Component} from '@angular/core';
import {UnicornService} from '../../shared/services/unicorn.service';
import {Unicorn} from '../../shared/models/unicorn.model';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[];

    public avgAge: number;

    constructor(private unicornService: UnicornService) {
        // this.unicornService.listAdoptable().subscribe((unicorns: Unicorn[]) => this.unicorns = unicorns);
        this.unicornService.listWithCapacitiesLabels2().subscribe((unicorns: Unicorn[]) => this.unicorns = unicorns);
        this.unicornService.getAverageAge().subscribe(avg => this.avgAge = avg);
    }

}
