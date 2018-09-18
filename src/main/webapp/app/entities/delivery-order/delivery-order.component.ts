import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IDeliveryOrder } from 'app/shared/model/delivery-order.model';
import { Principal } from 'app/core';
import { DeliveryOrderService } from './delivery-order.service';

@Component({
    selector: 'jhi-delivery-order',
    templateUrl: './delivery-order.component.html'
})
export class DeliveryOrderComponent implements OnInit, OnDestroy {
    deliveryOrders: IDeliveryOrder[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private deliveryOrderService: DeliveryOrderService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.deliveryOrderService
                .search({
                    query: this.currentSearch
                })
                .subscribe(
                    (res: HttpResponse<IDeliveryOrder[]>) => (this.deliveryOrders = res.body),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.deliveryOrderService.query().subscribe(
            (res: HttpResponse<IDeliveryOrder[]>) => {
                this.deliveryOrders = res.body;
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInDeliveryOrders();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IDeliveryOrder) {
        return item.id;
    }

    registerChangeInDeliveryOrders() {
        this.eventSubscriber = this.eventManager.subscribe('deliveryOrderListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
