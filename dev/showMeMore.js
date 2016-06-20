jQuery.fn.showMeMore = function (options) {
    var options = $.extend({
        current: 4, // number to be displayed at start
        count: 4, // how many show in one click
        fadeSpeed: 300, // animation speed
        showButton: '', // show button (false / string)
        hideButton: '', // hide button
        showButtonText: 'showButton', //text at the showButton
        hideButtonText: 'hideButton', //text at the showButton
        enableHide: false, // allow to hide (true / false)
        generateBtn: true,// auto generate buttons if they not added by default
        list: 'li' //tile elements
    }, options);

    var make = function () {

        var showButton = $(options.showButton),
            hideButton = $(options.hideButton),
            enableHide = options.enableHide,
            count = options.count,
            current = options.current,
            fadeSpeed = options.fadeSpeed,
            list = $(this).find(options.list),//find all 'list' elements
            quantity = list.length;//list elements count

        //add SHOW button if it is not installed by the user
        if (options.generateBtn && options.showButton == '') {
            $(this).append('<button class="showButton">' + options.showButtonText + '</button>');
            showButton = $(this).find('.showButton');
        }
        //add HIDE button if it is not installed by the user and if enableHide is true
        if (options.generateBtn && enableHide && options.showButton == '') {
            $(this).append('<button class="hideButton">' + options.hideButtonText + '</button>');
            hideButton = $(this).find('.hideButton');
        }

        list.hide();//hide all elements
        hideButton.hide()//hide "hideButton"
        if (quantity <= current) {
            showButton.hide();
        }
        showItem(0);//show first elements

        function switchButtons() {
            if (enableHide == false) {
                showButton.hide();
            } else {
                showButton.hide();
                hideButton.show();
            }
        }

        //this function show next elements
        function showItem(time) {
            for (var i = 0; i < current; i++) {
                if ($(list[i]).is(':hidden')) {
                    $(list[i]).fadeIn(time);
                }
            }
        }

        //this function hide all elements
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