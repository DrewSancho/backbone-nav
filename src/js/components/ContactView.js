var ContactView = Backbone.View.extend({
    template: _.template('<h1>Contact!</h1>'),

    // we have to initialize the view with the child template we want to have in this view
    initialize: function () {
        this.child = new SexPantherView();
    },

    // here we append the child to the html of the contact template and make the child render
    render: function () {
        this.$el.html(this.template());
        this.$el.append(this.child.el);
        this.child.render();
    }
});