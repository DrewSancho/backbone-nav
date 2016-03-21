var MyStupidView = Backbone.View.extend({
    template: _.template(`
        <h1>Eazy McDeazy, My Hero!</h1>
        <div><img src="http://i.giphy.com/3osxYbDLQSrjiY6MYE.gif"</div>
        `),
    render: function () {
        this.$el.html(this.template());
    }
});