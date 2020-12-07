$("body").onScroll(function(){
    $("#navbar").addClass("nav-scrolled")
})
$("body").onScrollTop(function(){
    $("#navbar").removeClass("nav-scrolled")
})