$( document ).ready(function() {

clientStuff();
	$('.next, .prev').click(function(){
		var $this 			= $(this),
			curActiveClient = $('.testimonial-wrap').find('.active-unit'),
			position		= $('.testimonial-wrap').children().index(curActiveClient),
			clientNum 		= $('.testimonial-unit').length;


			if($this.hasClass('next')){
				if(position < clientNum -1){
					$('.active-unit').removeClass('active-unit').next().addClass('active-unit');
				}else{
					$('.testimonial-unit').removeClass('active-unit').first().addClass('active-unit');
				}
			}else{
				if(position === 0){
					$('.testimonial-unit').removeClass('active-unit').last().addClass('active-unit');
				}else{
					$('.active-unit').removeClass('active-unit').prev().addClass('active-unit');
				}
			}
	});
});

function clientStuff(){
	
}