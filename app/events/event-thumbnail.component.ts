import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch] = "event?.time">
            Time: {{event?.time}}
            <span> - </span>
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
            <span class="pad-right">Location: {{event?.location?.address}}</span>
              <span> - </span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.eventUrl">
            <span class="pad-right">Event Url: {{event?.eventUrl}}</span>
        </div>
        </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-right { margin-right: 3px; }
        .pad-left { margin-left: 3px; }
        .well div { color: #bbb; }
        .yellow { color: yellow !important; }
        .bold { font-weight: bold; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;
    logFoo() {
        console.log('fooey');
    }

    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am') {
            return { color: '#ff3300', 'font-weight': 'bold' }
        }
        return {}
    }
}