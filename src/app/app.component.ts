import { Component } from '@angular/core';

import { AccountService } from './services';
import { User } from './models';
import { Socket } from 'ngx-socket-io';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService, private socket: Socket) {
        this.accountService.user.subscribe(x => this.user = x);
    }


}
