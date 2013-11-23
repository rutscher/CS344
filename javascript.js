window.onload=function() {
	 
    $('#test').rssfeed('http://sustainabilityhousewsu.wordpress.com/tag/website-General/feed/');

    $('dd').hide();

    $('dt').click(function(e){
    // All dt elements after this dt element until the next dt element
    // Will be hidden or shown depending on it's current visibility
    
    $(this).nextUntil('dt').slideToggle();
});


}






    