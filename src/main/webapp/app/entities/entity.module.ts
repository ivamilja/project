import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NoviTypeModule } from './type/type.module';
import { NoviArticleModule } from './article/article.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        NoviTypeModule,
        NoviArticleModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoviEntityModule {}
