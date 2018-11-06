import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UnicornService} from '../../shared/services/unicorn.service';
import {Unicorn} from '../../shared/models/unicorn.model';
import {Router} from '@angular/router';

@Component({
    selector: 'uni-add-unicorn',
    templateUrl: './add-unicorn.component.html',
    styleUrls: ['./add-unicorn.component.scss']
})
export class AddUnicornComponent {

    public unicornForm: FormGroup;

    constructor(fb: FormBuilder,
                private unicornService: UnicornService,
                private router: Router) {
        this.unicornForm = fb.group({
            name: fb.control('', Validators.required),
            hobbies: fb.control([]),
        });
    }

    public save() {
        const unicorn = {...this.unicornForm.value} as Unicorn;

        this.unicornService.save(unicorn).subscribe((unicornCreated: Unicorn) => {
            this.router.navigate(['unicorns/:id', {id: unicornCreated.id}]);
        });
    }

}
