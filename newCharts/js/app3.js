$(document).ready(function () {

    //Global Options
    Chart.defaults.global.defaultFontFamily = 'Roboto';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = 'rgba(255, 88, 88, 1)';
    Chart.defaults.global.animation.duration = 4000;
   // Chart.defaults.global.animation.easing = 'easeInOutSine';
    //console.log(Chart.defaults.global);
    let data1 = [31, 74, 6, 39, 20, 85, 7];
    let data2 = [85, 44, 26, 30, 92, 65, 27];
    let labels = ["January", "February", "March", "April", "May", "June", "July"];
    let label1 = "First Dataset";
    let label2 = "Second Dataset";

    let allButtons = $('.tab button');
    let chartfunctions = [Blank(), Chart1(), Chart2(), Chart3()];
    //console.log(allButtons);
    for (let i = 0; i < allButtons.length; i++) {

        $('.tabcontent:first').show();
        $('.tab button:first').addClass('active');
        $('.tab button').click(function (event) {

            index = $(this).index();
            //console.log(index);
            $('.tab button').removeClass('active');
            $(this).addClass('active');
            $('.tabcontent').hide();
            $('.tabcontent').eq(index).show(500).slideDown();

        });
    }
    $('#home-icon').click(()=>{
 $('.tablinks').fadeToggle(500);
    })
    function Blank() {
       
    }
    function Chart1() {
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
                    animation: true,
                    animationSteps: 80,
                    //duration: 2000,
                    easing: 'easeInOutBounce',
                    dynamicDisplay: false
                }
            }
        });chart1.update();
    }

    function Chart2() {
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
    }

    function Chart3() {
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
    }

});