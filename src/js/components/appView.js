var AppView = Backbone.View.extend({
    className:'app',
    template: _.template($('#app-template').html()),
    initialize: function (options) {
        this.navView = options.navView;
        this.listenTo(app, 'show', this.show);
    },

    show: function (view) {
        if (view) {
            this.$('.page-slot').empty();
            view.render();
            this.$('.page-slot').append(view.el);
        }
    },

    render: function () {
    // remove the nav-slot from the dom and append and render it
        this.$el.html(this.template());
        // handling the nav
        this.$('.nav-slot').empty();
        this.navView.render();
        this.$('.nav-slot').append(this.navView.$el);
        // handles the optional sub-view
    }
});