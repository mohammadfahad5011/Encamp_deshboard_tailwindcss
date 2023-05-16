
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('#sidebarOpen').click(function () {

            $('#sidebar').addClass('show');

        });
        $('#sidebarClose').click(function () {

            $('#sidebar').removeClass('show');

        });


        // Sidebar Activation Script

        document.getElementById("sidebarOpen").addEventListener("click", function () {
            document.getElementById("sidebar").classList.add("show");
        });

        document.getElementById("sidebarClose").addEventListener("click", function () {
            document.getElementById("sidebar").classList.remove("show");
        });



 


    });




}(jQuery));