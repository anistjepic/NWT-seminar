"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var notifications_component_1 = require('./notifications/notifications.component');
var messages_component_1 = require('./messages/messages.component');
var home_profile_component_1 = require('./components/home_profile/home_profile.component');
exports.router = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'profile', component: home_profile_component_1.Home_ProfileComponent },
    { path: 'messages', component: messages_component_1.MessagesComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map