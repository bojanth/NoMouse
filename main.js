MovementConfig = {
    smallStep: 10,
    mediumStep: 30,
};

Mousetrap.bind("j", function() {
    Move.down();
});
Mousetrap.bind("k", function() {
    Move.up();
});
Mousetrap.bind("h", function() {
    Move.left();
});
Mousetrap.bind("l", function() {
    Move.right();
});
Mousetrap.bind("g g", function() {
    Move.top();
});
Mousetrap.bind("G", function() {
    Move.bottom();
});
Mousetrap.bind("H", function() {
    history.back();
});
Mousetrap.bind("L", function() {
    history.forward();
});

Move = {
    down: function () {
        window.scroll(window.scrollX, window.scrollY + MovementConfig.mediumStep)
    },
    up: function () {
        window.scroll(window.scrollX, window.scrollY - MovementConfig.mediumStep)
    },
    left: function () {
        window.scroll(window.scrollX - MovementConfig.smallStep, window.scrollY)
    },
    right: function () {
        window.scroll(window.scrollX + MovementConfig.smallStep, window.scrollY)
    },
    top: function () {
        window.scroll(window.scrollX, 0);
    },
    bottom: function () {
        window.scroll(window.scrollX, document.body.scrollHeight);
    }
};
