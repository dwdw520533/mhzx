$(function(){
	$('.head_btn a,.left_btn a,.info_menpai a').css('opacity', 0).hover(
		function(){
			$(this).stop().fadeTo(400, 1);
		},function(){
			$(this).stop().fadeTo(350, 0);
	});
})