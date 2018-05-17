$(document).ready(function()
{
    $('.carousel').carousel({
        interval:6000
    });
    // color-option
    $(".gear-check").click(function()
    {
        $(".color-option").fadeToggle();
    });
});