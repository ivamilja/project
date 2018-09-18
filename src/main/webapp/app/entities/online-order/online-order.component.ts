import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IOnlineOrder } from 'app/shared/model/online-order.model';
import { Principal } from 'app/core';
import { OnlineOrderService } from './online-order.service';

@Component({
    selector: 'jhi-online-order',
    templateUrl: './online-order.component.html'
})
export class OnlineOrderComponent implements OnInit, OnDestroy {
    onlineOrders: IOnlineOrder[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private onlineOrderService: OnlineOrderService,
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
            this.onlineOrderService
                .search({
                    query: this.currentSearch
                })
                .subscribe(
                    (res: HttpResponse<IOnlineOrder[]>) => (this.onlineOrders = res.body),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.onlineOrderService.query().subscribe(
            (res: HttpResponse<IOnlineOrder[]>) => {
                this.onlineOrders = res.body;
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
        this.registerChangeInOnlineOrders();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IOnlineOrder) {
        return item.id;
    }

    registerChangeInOnlineOrders() {
        this.eventSubscriber = this.eventManager.subscribe('onlineOrderListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
