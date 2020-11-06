function openChart(evt, chartName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(chartName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(document).ready(function () {
    $('#home-icon').click(function () {
        //  $('.tab').slideToggle()
        //   .toggle(function(){
        $('.tablinks').toggle(1000);
        $('.charts').toggle();
    });
    // let line = $('#line');
    // $(line).css("position", "relative");
    // line.style.height = '540px';
    // let bar = $('#bar');
    // let pie = $('#pie');

});
//Global Options
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = 'rgba(255, 88, 88, 1)';
Chart.defaults.global.animation.duration = 4000;
Chart.defaults.global.animation.easing = 'easeInOutSine';
console.log(Chart.defaults.global);
let data1 = [31, 74, 6, 39, 20, 85, 7];
let data2 = [85, 44, 26, 30, 92, 65, 27];
let labels = ["January", "February", "March", "April", "May", "June", "July"];
let label1 = "First Dataset";
let label2 = "Second Dataset";
// let ctx1, ctx2, ctx3;
// let ctx = [ctx1, ctx2, ctx3];
// let allCharts = ['myChart1', 'myChart2', 'myChart3'];
// let chartType = ['line', 'bar', 'pie'];

// for (var i = 0; i < ctx.length; i++) {
//     ctx[i] = document.getElementById(allCharts[i]).getContext('2d');
//     let charts = new Chart()
// }
let ctx1 = document.getElementById('myChart1').getContext('2d');
let chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
                label: label1,
                data: data1,
                backgroundColor: 'rgba(255, 88, 88, 0.5)',
                borderWidth: 2 / 3,
                borderColor: '#585858',
                pointBorderWidth: 1
            },
            {
                label: label2,
                data: data2,
                backgroundColor: 'rgba(255, 188, 88, 0.3)',
                borderWidth: 2 / 3,
                borderColor: '#585858',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce'
        }
    }
});
let ctx2 = document.getElementById('myChart2').getContext('2d');
let chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
                label: label1,
                data: data1,
                backgroundColor: 'rgba(255, 88, 88, 0.3)',
                borderWidth: 2 / 3,
                borderColor: '#585858',
            },
            {
                label: label2,
                data: data2,
                backgroundColor: 'rgba(255, 188, 88, 0.3)',
                borderWidth: 2 / 3,
                borderColor: '#585858',
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce'
        }
    }
});
let ctx3 = document.getElementById('myChart3').getContext('2d');
let chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
                label: label1,
                data: data1,
                weight: 2,
                backgroundColor: [
                    'rgba(255, 88, 88, 0.5)',
                    'rgba(255, 88, 188, 0.5)',
                    'rgba(255, 188, 88, 0.5)',
                    'rgba(255, 88, 88, 0.5)',
                    'rgba(255, 88, 88, 0.5)',
                    'rgba(155, 88, 88, 0.5)',
                    'rgba(255, 88, 188, 0.5)'
                ],

                borderWidth: 2 / 3,
                borderColor: '#585858'
            },
            {
                label: label2,
                data: data2,
                weight: 3,
                backgroundColor: [
                    'rgba(255, 188, 88, 0.5)',
                    'rgba(255, 88, 88, 0.5)',
                    'rgba(255, 188, 188, 0.5)',
                    'rgba(255, 88, 188, 0.5)',
                    'rgba(255, 188, 88, 0.5)',
                    'rgba(155, 88, 88, 0.5)',
                    'rgba(255, 88, 188, 0.5)'
                ],
                borderWidth: 3 / 5,
                borderColor: '#585858',
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce'
        }
    }
});