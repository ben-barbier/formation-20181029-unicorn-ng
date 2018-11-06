import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Data} from '@angular/router';
import {Unicorn} from '../../../../models/unicorn.model';
import {UnicornService} from '../../../../services/unicorn.service';

@Component({
    selector: 'uni-edit-unicorn',
    templateUrl: './edit-unicorn.modal.component.html',
    styleUrls: ['./edit-unicorn.modal.component.scss']
})
export class EditUnicornModalComponent {

    public unicorn: Unicorn = this.data.unicorn;

    constructor(private dialogRef: MatDialogRef,
                private unicornService: UnicornService,
                @Inject(MAT_DIALOG_DATA) private data: any) {
    }

    public saveUnicorn() {
        const unicornToSave: Unicorn = {...this.unicorn};
        delete unicornToSave.capacitiesLabels;
        this.unicornService.update(unicornToSave).subscribe((updatedUnicorn: Unicorn) =>
            this.dialogRef.close(updatedUnicorn));
    }
}
