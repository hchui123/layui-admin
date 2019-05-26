layui.use(['element','layer','jquery'],function(){
	var element = layui.element,
	layer = layui.layer,
	$ = layui.jquery;

    //处理tab的首项不知道如何处理
    // if($('.first')){
    // 	$('.first').removeAttr('lay-allowClose')
    // }
    
    //监听toggle点击
    $('.top-nav .layui-icon-shrink-right').click(function(){
        if($(this).hasClass('layui-icon-shrink-right')){
        	$('.left-nav').stop().animate({left:"-200px"},200);
        	$('.toggle').stop().animate({left:"0px"},200);
        	$(this).removeClass('layui-icon-shrink-right').addClass('layui-icon-spread-left');
        }else{
        	$('.left-nav').stop().animate({left:"0px"},200);
        	$('.toggle').stop().animate({left:"200px"},200);
        	$(this).removeClass('layui-icon-spread-left').addClass('layui-icon-shrink-right');
        }
    });
    //监听nav点击
    element.on('nav(nav)',function(elem){
    	var id = $(this).attr('lay-id');
    	var url = $(this).attr('lay-url');
    	var title = $(this).text();
        
    	if(!id){return false;}

    	var active = $('.toggle').find('li[lay-id='+id+']');
    	if(active.length>0){
    		element.tabChange('tab',id);
    	}else{
    		element.tabAdd('tab',{
    			title:title,
    			url: url,
    			id:id
    		});
    		element.tabChange('tab',id);
    	}
    	

    });
})