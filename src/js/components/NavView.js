var NavView = Backbone.View.extend({

    className: 'nav',

    events: {
        'click button': 'onRouteClick'
    },

    buttons: {
        // route: name of button both in strings
        '': 'Home',
        'about': 'About',
        'contact': 'Contact'
    },

    initialize: function () {
        this.listenTo(Backbone.history, 'route', this.select);
    },

    select: function () {
        this.$el.find('button').removeClass('is-active');

        this.$el.children().each(function () {
            var el = $(this);
            if (el.data('route') === window.location.hash.substring(1)) {
                el.addClass('is-active');
            }
        });
    },

    render: function () {
        this.$el.empty();

        var children = [];
        var $el;

        for (var prop in this.buttons) {
            $el = $('<button>');
            $el.text(this.buttons[prop]);
            $el.data('route', prop);
            children.push($el);
        }
        this.$el.append(children);
    },

    onRouteClick: function (e) {
        window.location.hash = $(e.target).data('route');
    }
});