$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr("data-filter");
        if(value == 'all'){
            $('.insight-box').show('1000');
        }
        else{
            $('.insight-box')
            .not('.' + value)
            .hide('1000');
            $('.insight-box')
            .filter('.' + value)
            .show('1000');      
          }
    });


$('.filter-item').click(function() {
    $(this).addClass('active-filter').siblings().removeClass('active-filter');
});

});

let header = document.querySelector('')