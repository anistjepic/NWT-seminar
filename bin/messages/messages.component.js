"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var my_timer_service_1 = require('../services/my_timer.service');
var MessagesComponent = (function () {
    function MessagesComponent() {
        this.notify = new core_1.EventEmitter();
        this.brojac = 5;
    }
    MessagesComponent.prototype.onClick = function () {
        this.my_class = "viewed";
        if (this.brojac > 0) {
            this.brojac--;
        }
        this.notify.emit(this.brojac);
        console.log(this.brojac);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MessagesComponent.prototype, "notify", void 0);
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            templateUrl: './app/messages/messages.component.html',
            styleUrls: ['./app/messages/messages.component.css'],
            providers: [my_timer_service_1.My_timer]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map