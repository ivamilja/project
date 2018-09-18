import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NoviTypeModule } from './type/type.module';
import { NoviArticleModule } from './article/article.module';
import { NoviCityModule } from './city/city.module';
import { NoviClientModule } from './client/client.module';
import { NoviVehicleModule } from './vehicle/vehicle.module';
import { NoviPositionModule } from './position/position.module';
import { NoviOnlineOrderModule } from './online-order/online-order.module';
import { NoviEmployeeModule } from './employee/employee.module';
import { NoviOnlineOrderItemModule } from './online-order-item/online-order-item.module';
import { NoviDeliveryOrderModule } from './delivery-order/delivery-order.module';
import { NoviDeliveryOrderItemModule } from './delivery-order-item/delivery-order-item.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        NoviTypeModule,
        NoviArticleModule,
        NoviCityModule,
        NoviClientModule,
        NoviVehicleModule,
        NoviPositionModule,
        NoviOnlineOrderModule,
        NoviEmployeeModule,
        NoviOnlineOrderItemModule,
        NoviDeliveryOrderModule,
        NoviDeliveryOrderItemModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoviEntityModule {}
