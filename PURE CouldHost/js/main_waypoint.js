$(function(){

    var $device = $('.device');
    var $features = $('.features');
    var $location = $('.location');


    var waypoints1 = $device.waypoint(function() {
            $device.find('img').addClass('animate');
        }, {
        offset: '50%'
    });
    var waypoints2 = $features.waypoint(function() {
            $features.find('img').addClass('grow-img');
            $features.find('h4').addClass('animate');
        }, {
        offset: '50%'
    });
    var waypoints3 = $location.waypoint(function() {
            //$location.find('.stripe').addClass('animate_down');  
            $('.stripe').each(function(idx){
                var $this = $(this);
                setTimeout(function(){ $this.addClass('animate_down');}, 100*idx);
            });
        }, {
        offset: '50%'
    });

});