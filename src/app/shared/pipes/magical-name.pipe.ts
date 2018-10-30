import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'magicalName'
})
export class MagicalNamePipe implements PipeTransform {

    transform(name: string): string {
        console.log('top');
        return Array
            .from(name)
            .map((char, idx) => (idx % 2) ? char.toLowerCase() : char.toUpperCase())
            .join('');
    }

}
