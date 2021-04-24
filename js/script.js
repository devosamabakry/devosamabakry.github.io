// Progress Animation

var element_position = $('#about').offset().top;

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if (y_scroll_pos > scroll_pos_test) {
        $('#circle-95').circleProgress({
            value: 0.95,
            size: 150,
            fill: {
                color: ["#212121"]
            }
        });
        $('#circle-80').circleProgress({
            value: 0.80,
            size: 150,
            fill: {
                color: ["#212121"]
            }
        });
        $('#circle-85').circleProgress({
            value: 0.85,
            size: 150,
            fill: {
                color: ["#212121"]
            }
        });
        $('#circle-90').circleProgress({
            value: 0.90,
            size: 150,
            fill: {
                color: ["#212121"]
            }
        });
        $('#circle-60').circleProgress({
            value: 0.60,
            size: 150,
            fill: {
                color: ["#212121"]
            }
        });
        $('#circle-75').circleProgress({
            value: 0.75,
            size: 150,
            fill: {
                color: ["#212121"]
            }
        });
        $(window).off('scroll');
    }
});

// Nav-bar Color Change

window.onscroll = function() {

    document.getElementById("nav").style.transition = "all 1s";

    if (pageYOffset > 55) {
        document.getElementById('nav').classList.add('nav-bg');
        document.getElementById('nav').classList.remove('bg-transparent');
        document.getElementById('nav').classList.remove('pt-4');
    } else {
        document.getElementById('nav').classList.remove('nav-bg');
        document.getElementById('nav').classList.add('bg-transparent');
        document.getElementById('nav').classList.add('pt-4');
    }

}


// Counter

var seconds = 0;
var el = document.getElementById('count-span');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
}

var cancel = setInterval(incrementSeconds, 1000);