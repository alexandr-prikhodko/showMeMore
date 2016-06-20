jQuery.fn.showMeMore = function (options) {
    var options = $.extend({
        current: 4,
        count: 4,
        fadeSpeed: 300,
        showButton: '',
        hideButton: '',
        showButtonText: 'showButton',
        hideButtonText: 'hideButton',
        enableHide: false,
        generateBtn: true,
        list: 'li'
    }, options);

    var make = function () {

        var showButton = $(options.showButton),
            hideButton = $(options.hideButton),
            enableHide = options.enableHide,
            count = options.count,
            current = options.current,
            fadeSpeed = options.fadeSpeed,
            list = $(this).find(options.list),
            quantity = list.length;

        if (options.generateBtn && options.showButton == '') {
            $(this).append('<button class="showButton">' + options.showButtonText + '</button>');
            showButton = $(this).find('.showButton');
        }

        if (options.generateBtn && enableHide && options.showButton == '') {
            $(this).append('<button class="hideButton">' + options.hideButtonText + '</button>');
            hideButton = $(this).find('.hideButton');
        }

        list.hide();
        hideButton.hide();
        if (quantity <= current) {
            showButton.hide();
        }
        showItem(0);

        function switchButtons() {
            if (enableHide == false) {
                showButton.hide();
            } else {
                showButton.hide();
                hideButton.show();
            }
        }

        function showItem(time) {
            for (var i = 0; i < current; i++) {
                if ($(list[i]).is(':hidden')) {
                    $(list[i]).fadeIn(time);
                }
            }
        }

        function hideAll(time) {
            for (var i = current; i < quantity; i++) {
                $(list[i]).fadeOut(time);
            }
        }

        showButton.click(function (event) {
            event.preventDefault();
            current += count;
            showItem(fadeSpeed);
            if (current >= quantity) {
                switchButtons();
            }
        });

        hideButton.click(function (event) {
            event.preventDefault();
            current = options.current;
            hideAll(fadeSpeed);
            hideButton.hide();
            showButton.show();
        });
    };

    return this.each(make);
};