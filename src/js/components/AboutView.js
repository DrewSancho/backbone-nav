var AboutView = Backbone.View.extend({
    template: _.template('<h1>About!</h1>'),

    initialize: function () {
        this.child = new MyStupidView();
    },

    render: function () {
        this.$el.html(this.template());
        this.$el.append(this.child.el);
        this.child.render();
    }
});