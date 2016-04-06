//Плагин показать/скрыть элементы списка
    jQuery.fn.showMeMore = function (options) {
        var options = $.extend({
            current: 3,//сколько должно быть отображено сразу
            count: 2,//сколько показать за один клик
            fadeSpeed: 1000,//скорость анимации
            showButton: '.showButton',//кнопка показать
            hideButton: '.hideButton',//кнопка скрыть
            enableHide: false //разрешить скрывать (true/false)
        }, options);

        var make = function () {
            var showButton = $(options.showButton),
                hideButton = $(options.hideButton),
                enableHide = options.enableHide,
                count = options.count,
                current = options.current,
                fadeSpeed = options.fadeSpeed,
                list = $(this).find("li"),//список всех "li"
                quantity = list.length;//количество всех "li" элементов

            list.hide();//скрыть все
            hideButton.hide()//скрыть кнопку "скрыть"
            if (quantity <= current) {
                //console.log(quantity);
                //console.log(current);
                showButton.hide();
            }
            showItem(0);//показать первые

            function switchButtons() {
                if (enableHide == false) {
                    showButton.hide();
                } else {
                    showButton.hide();
                    hideButton.show();
                }
            }


            //ф-ция показа элементов
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