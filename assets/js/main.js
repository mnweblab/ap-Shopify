(function ($) {
"use strict";

    /* mobile-menu */
 $(document).ready( function(){ 
         $("#search_block_top").each( function(){
         	$("#search-icon").click( function(){                 
              	$(".over-layer").addClass("show"); 
              	$(".block-form").addClass("show");
              $('#search-icon-close').addClass("show");   
             });
           $("#search-icon-close").click( function(){
              $(".block-form").removeClass("show");
              $('#search-icon-close').removeClass("show");
             $(".over-layer").removeClass("show")
           });
         }); 
    });
		/* search-bar */

		
	$('.apollo-megamenu').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '#appolo-menu'
	});	
		
			



})(jQuery);