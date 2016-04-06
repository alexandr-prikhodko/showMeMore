//������ ��������/������ �������� ������
    jQuery.fn.showMeMore = function (options) {
        var options = $.extend({
            current: 3,//������� ������ ���� ���������� �����
            count: 2,//������� �������� �� ���� ����
            fadeSpeed: 1000,//�������� ��������
            showButton: '.showButton',//������ ��������
            hideButton: '.hideButton',//������ ������
            enableHide: false //��������� �������� (true/false)
        }, options);

        var make = function () {
            var showButton = $(options.showButton),
                hideButton = $(options.hideButton),
                enableHide = options.enableHide,
                count = options.count,
                current = options.current,
                fadeSpeed = options.fadeSpeed,
                list = $(this).find("li"),//������ ���� "li"
                quantity = list.length;//���������� ���� "li" ���������

            list.hide();//������ ���
            hideButton.hide()//������ ������ "������"
            if (quantity <= current) {
                //console.log(quantity);
                //console.log(current);
                showButton.hide();
            }
            showItem(0);//�������� ������

            function switchButtons() {
                if (enableHide == false) {
                    showButton.hide();
                } else {
                    showButton.hide();
                    hideButton.show();
                }
            }


            //�-��� ������ ���������
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