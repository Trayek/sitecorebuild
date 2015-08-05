jQuery(function() {
    jQuery("li.dropdown").mouseenter(mouseIn).mouseleave(mouseOut);

    function mouseIn() {
        jQuery(this).find("ul.dropdown-menu").show();
        jQuery(this).addClass("open");
    }

    function mouseOut() {
        jQuery(this).find("ul.dropdown-menu").hide();
        jQuery(this).removeClass("open");
    }
});
