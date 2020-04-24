'use strict';
document.addEventListener("DOMContentLoaded", function() {
   new landingMain();
});

const landingMain = function () {
    const viewport = document.querySelector('meta[name="viewport"]'),
        header = document.querySelector('header .wrap'),
        header_clone = header.cloneNode(true),
        footer_social_clone = document.querySelector('footer .social-button').cloneNode(true),
        inputs = document.querySelectorAll('input');

    const init = function () {
        mobilecheck(navigator.userAgent||navigator.vendor||window.opera);
        inputAction();
        document.addEventListener('click',function(e){
            if(e.target && (e.target.classList.contains('menu_button') || e.target.closest('.menu_button'))) {
                document.querySelector('.menu').classList.toggle('open');
            }
        });
    };

    const createMenuNode = function () {
        document.querySelector('.menu').appendChild(header_clone);
        document.querySelector('.menu .wrap nav').appendChild(footer_social_clone);
        mobileMenuOnScroll()
    };

    const mobilecheck = function(a) {
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {
            if (document.documentElement.clientWidth <= 480) {
                const scale = (window.screen.width / 375) > 1 ? 1 : window.screen.width / 375;
                viewport.setAttribute('content', 'width=375, initial-scale=' + scale + ', user-scalable=no');
            }
            if (document.documentElement.clientWidth > 480 && document.documentElement.clientWidth <= 768) {
                const scale = (window.screen.width / 768) > 1 ? 1 : window.screen.width / 768;
                viewport.setAttribute('content', 'width=768, initial-scale=' + scale + ', user-scalable=no');
                initFullPage();
            }
            createMenuNode();
        } else {
            if (document.documentElement.clientWidth <= 1440) {
                const scale = (window.screen.width / 1440) > 1 ? 1 : window.screen.width / 1440;
                viewport.setAttribute('content', 'width=1440, initial-scale=' + scale + ', user-scalable=no');
            }
            if (document.documentElement.clientHeight >= 600) {
                initFullPage();
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    };
    const initFullPage = function () {
        document.body.style.overflow = 'auto';
        var timeoutId,
            sectionNumber = document.querySelectorAll('section').length,
            wHeight = window.innerHeight;
        function stabilize(){
            const posTop = document.body.scrollTop;
            const count = Math.floor(posTop / wHeight);
            $('nav ul li a').removeClass('active');
            if (posTop >= count * wHeight + wHeight/2) {
                $("html, body").animate({ scrollTop: (count + 1) * wHeight}, 250);
                $('nav ul li').find('a').eq(count+1).addClass('active');
            } else {
                $("html, body").animate({ scrollTop: count * wHeight}, 250);
                $('nav ul li').find('a').eq(count).addClass('active');
                updateScrollButton()
            }
        }
        document.querySelector('footer .button').style.display =  (document.body.scrollTop >= (sectionNumber - 1) * wHeight) ? 'none' : 'inline-block';

        $('body').scroll(function(){
            document.querySelector('footer .button').style.display =  (document.body.scrollTop >= (sectionNumber - 1) * wHeight) ? 'none' : 'inline-block';
            clearTimeout(timeoutId);
            timeoutId = setTimeout(stabilize,500)
        });
    };
    const updateScrollButton = function () {
        var $footerButton = $('footer .button');
        const buttonList = $('nav ul li').map((index, item) => ({
            href: $(item).find('a').attr('href'),
            index: $(item).data('index'),
            active: $(item).find('a').hasClass('active')
        }));
        $.each(buttonList, function( key, value ) {
            if (value.active && buttonList[key+1]) {
                $footerButton.data('href', buttonList[key+1].href)
                $footerButton.data('index', buttonList[key+1].index)
            }
        });
    }
    const mobileMenuOnScroll = function () {
        $('body').scroll(function() {
            var scrollDistance = $('body').scrollTop();
            if (scrollDistance > 20 ) {
                $('header').addClass('menu_fixed');
            } else $('header').removeClass('menu_fixed');
        }).scroll();
    };
    const inputAction = function () {
        inputs.forEach(function (item) {
            item.onblur = function () {
                if (this.value.length < 2) {
                    this.closest('.input').classList.add('error-input');
                    this.closest('.input').classList.remove('active');
                } else {
                    this.closest('.input').classList.add('active');
                }
            }
        });
        document.querySelector('textarea').onblur = function () {
            if (this.value.length < 2) {
                this.closest('.input').classList.add('error-input');
                this.closest('.input').classList.remove('active');
            } else {
                this.closest('.input').classList.add('active');
            }
        };
        document.querySelector('textarea').onfocus = function () {
            this.closest('.input').classList.remove('error-input');
        };
        inputs.forEach(function (item) {
            item.onfocus = function () {
                this.closest('.input').classList.remove('error-input');
            }
        })
    };
    init();
};

$(document).ready(function(){
    $('.carousel').slick({
        dots: false,
        customPaging : function(slider, i) {
            return '<span></span>';
        },
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('nav ul li a').click(function (e) {
        e.preventDefault();
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        document.querySelector('.menu').classList.remove('open');
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top + document.body.scrollTop}, 1000);
    });
    $('#success.section .button').click(function () {
        $('nav ul li a').removeClass('active');
        $('nav ul li').find('a[href="' + $(this).data('href') + '"]').addClass('active');
        $("html, body").animate({ scrollTop: $($(this).data('href')).offset().top + document.body.scrollTop}, 1000);
    });
    $('footer .button').click(function () {
        $('nav ul li a').removeClass('active');
        $('nav ul li').find('a[href="' + $(this).data('href') + '"]').addClass('active');
        $("html, body").animate({ scrollTop: $($(this).data('href')).offset().top + document.body.scrollTop}, 1000);
    });
    $('.carousel .list-group .item').on('click', function() {
        var self = $(this);
        $('.carousel').slick('slickGoTo', Number(self.data('index')));
    });
    $('#contact .block button').click(function () {
        $('#contact .block button').removeClass('active');
        $(this).addClass('active')
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $(this).find('input').trigger('blur');
        if (!$(this).find('.input').hasClass('error-input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                    alert('success');
                }
            });
        } else {
            alert('Error');
        }
    });

});