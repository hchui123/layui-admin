layui.use(['element','layer','jquery'],function(){
	var element = layui.element,
	layer = layui.layer,
	$ = layui.jquery

	$(".left-to-right").click(function(){
		var leftnav = $(".left-nav");
		var body = $(".body-nav");
		var left = $(".left");
		if(!leftnav.hasClass('left')){
			leftnav.stop().animate({left:"-200px"},"slow");
			body.stop().animate({left:"0px"}, "slow");
			leftnav.addClass('left');
		}else{
			leftnav.stop().animate({left:"0px"});
			body.stop().animate({left:"200px"});
			leftnav.removeClass('left');
		}
	})
})