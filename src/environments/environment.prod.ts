import {NgModule} from '@angular/core';

export const environment = {
  production: true
};

// Laissez cette classe vide, pour que la compilation en prod fonctionne toujours
@NgModule({})
export class DevModule {

}
