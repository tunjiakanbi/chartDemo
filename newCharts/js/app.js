$(document).ready(function () {

    let tabLinks = $('.tablinks');
    let tabContent = $('.tabcontent');
    let chart = [];
    let button = [];
    //tabContent.hide();
    function openChart(evt, chartName) {
        for (var i = 0; i < tabContent.length; i++) {
            chart = tabContent[i];
            $(chart).hide();
        }
        for (var i = 0; i < tabLinks.length; i++) {
            button = tabLinks[i];
            $(button).toggleClass('active');
            
        }

    }
    // $(button).on('click',openChart(evt, chartName));
            
    // );

});

            //     function openChart() {
            //          button = tabLinks[i];
            //         $(button).on('click', ()=>{
            //          $(chart).toggle();
            //         })
            //         openChart();
            //    }



            //console.log(tabLinks);
            // console.log(tabContent);