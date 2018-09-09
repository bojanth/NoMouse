Config = {
    steps: 30
};

Mousetrap.bind("j", function() {
    Scroller.scrollDown();
});
Mousetrap.bind("k", function() {
    Scroller.scrollUp();
});
Mousetrap.bind("G", function() {
    Scroller.scrollBottom();
});
Mousetrap.bind("g g", function() {
    Scroller.scrollTop();
});

Scroller = {
    scrollDown: function () {
        window.scroll(window.scrollX, window.scrollY + Config.steps)
    },
    scrollUp: function () {
        window.scroll(window.scrollX, window.scrollY - Config.steps)
    },
    scrollTop: function () {
        window.scroll(window.scrollX, 0);
    },
    scrollBottom: function () {
        window.scroll(window.scrollX, document.body.scrollHeight);
    }
};
