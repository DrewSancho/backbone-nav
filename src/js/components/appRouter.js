var AppRouter = Backbone.Router.extend({
    // don't prefix your routes with leading slashes '/' <- like that
    routes: {
        '': 'home',
        'about': 'about',
        'contact': 'contact'
    },
    home: function () {
        app.trigger('show', new HomeView());
    },
    about: function () {
        app.trigger('show', new AboutView());
    },
    contact: function () {
        app.trigger('show', new ContactView());
    }
});