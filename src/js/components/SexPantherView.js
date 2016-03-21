var SexPantherView = Backbone.View.extend({
    template: _.template(`
        <h1>Sex Panther</h1>
        <div><img src="http://i.giphy.com/VmwYUpNdySssU.gif"></div>
        `),
    render: function () {
        this.$el.html(this.template());
    }
});