$(document).ready(function() {

    $(document).scroll(function(){

		if($(window).scrollTop()>150){
                $( ".first_value" ).animate( {width: "50%"}, 1000); //, 100, "linear", function() {} );
                $( ".second_value" ).animate( {width: "85%"}, 1000); // 100, "linear", function() {} );
                $( ".third_value" ).animate( {width: "70%"}, 1000, "linear", function() {} );
                $( ".fourth_value" ).animate( {width: "85%"}, 1000);
                $( ".fifth_value" ).animate( {width: "70%"}, 1000);
        }
    });
});

