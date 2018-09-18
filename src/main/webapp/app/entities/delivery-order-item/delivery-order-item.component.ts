import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IDeliveryOrderItem } from 'app/shared/model/delivery-order-item.model';
import { Principal } from 'app/core';
import { DeliveryOrderItemService } from './delivery-order-item.service';

@Component({
    selector: 'jhi-delivery-order-item',
    templateUrl: './delivery-order-item.component.html'
})
export class DeliveryOrderItemComponent implements OnInit, OnDestroy {
    deliveryOrderItems: IDeliveryOrderItem[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private deliveryOrderItemService: DeliveryOrderItemService,
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
            this.deliveryOrderItemService
                .search({
                    query: this.currentSearch
                })
                .subscribe(
                    (res: HttpResponse<IDeliveryOrderItem[]>) => (this.deliveryOrderItems = res.body),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.deliveryOrderItemService.query().subscribe(
            (res: HttpResponse<IDeliveryOrderItem[]>) => {
                this.deliveryOrderItems = res.body;
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
        this.registerChangeInDeliveryOrderItems();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IDeliveryOrderItem) {
        return item.id;
    }

    registerChangeInDeliveryOrderItems() {
        this.eventSubscriber = this.eventManager.subscribe('deliveryOrderItemListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
