$(function(){
    $('#tab1').click(function(){
    if ($(this).is(':checked')){
        $('.features__tab3').hide(0);
        $('.features__tab2').hide(0);
        $('.features__tab1').show(0);
    }
});
    $('#tab2').click(function(){
    if ($(this).is(':checked')){
        $('.features__tab3').hide(0);
        $('.features__tab1').hide(0);
        $('.features__tab2').show(0);
    }
});
    $('#tab3').click(function(){
    if ($(this).is(':checked')){
        $('.features__tab1').hide(0);
        $('.features__tab2').hide(0);
        $('.features__tab3').show(0);
    }
    });
})
