layui.use(['element','layer','jquery','form'],function(){
	var element = layui.element,
	layer = layui.layer,
	$ = layui.jquery,
    form = layui.form;

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
        
    	if(!url){return false;}

    	var active = $('.toggle').find('li[lay-id='+id+']');
    	if(active.length>0){
    		element.tabChange('tab',id);
    	}else{
    		element.tabAdd('tab',{
    			title:title,
                content:'<iframe src="' + url + '" name="iframe' + id + '" class="iframe" frameborder="0" data-id="' + id + '" scrolling="auto" width="100%"  height="100%"></iframe>',
    			id:id
    		});
    		element.tabChange('tab',id);
    	}
    });
    //获取当前时间
    setInterval(function(){time()},1000);
    function time(){
        function p(s) {
            return s < 10 ? '0' + s: s;
        }
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var h=date.getHours();       //获取当前小时数(0-23)
        var m=date.getMinutes();     //获取当前分钟数(0-59)
        var s=date.getSeconds();  
        
        var now=year+'-'+p(month)+"-"+p(day)+" "+p(h)+':'+p(m)+":"+p(s);
        //document.getElementById('time').innerHTML = now;
        
        $("#time").html(now);
    };
    function day(){
        var today;
        var date = new Date();
        var d = date.getDay();
        switch(d)
        { 
            case 0:
               today = '星期天';
               break;
            case 1:
               today = '星期一';
               break;
            case 2:
               today = '星期二';
               break;

            case 3:
               today = '星期三';
               break;
            case 4:
                today = '星期四';
                break;
            case 5:
                 today = '星期五';
            case 6:
                 today = '星期六';
                 break;
            default:
               today = '星期';
               break;
        }
        return today;
    }
    //document.getElementById('day').innerHTML = day();
    $("#day").html(day);//可以放函数名,也可以放函数day()!
    


});
