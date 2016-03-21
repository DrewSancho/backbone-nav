// ****---- after initializing the routers, we need to execute backbone.history.start ----****
var router = new AppRouter();
var app = _.extend({}, Backbone.Events);

var navView = new NavView();
var appView = new AppView({ navView: navView });

appView.render();

$('#app').append(appView.$el);

Backbone.history.start();