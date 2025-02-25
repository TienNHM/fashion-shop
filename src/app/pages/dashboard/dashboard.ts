import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notifications-widget';
import { StatsWidget } from './components/stats-widget';
import { RecentSalesWidget } from './components/recent-sales-widget';
import { BestSellingWidget } from './components/bestselling-widget';
import { RevenueStreamWidget } from './components/revenue-stream-widget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
