$(function(){
	/*背景图片移动初始化*/
	var i = 3000;
	function a(){
		++i || (i = 3000);
		$('#clouds').css('background-position',i);
	}
	//设定背景图片移动的间隔时间
	setInterval(a,100);

	//根据浏览器窗口大小调整每屏最小高度
	var height = window.innerHeight;
	$('.wrapper').css('min-height',height);
	$('.wrapper').css('height',height);

	/*离婚期的天数计算*/
	//婚期设置
	var timedate= new Date('January 19,2014');
	//现在的时间    
	var now = new Date();    
	//根据时间差计算天数
	var date = timedate.getTime() - now.getTime();    
	var time = Math.floor(date / (1000 * 60 * 60 * 24));    
	if (time >= 1){
	//写入天数到指定位置
	$('#days span').html(time);
	}else{$('#days').html('婚礼已结束，谢谢！');}
	
	/*页面平滑滚动效果，并为当前页面对应的导航链接添加active类*/
	$("#nav a").click(function(e){
		//获取当前链接地址
		var href = $(this).attr("href");
		var pos = $(href).offset().top;
		if($(this).attr('class')!='wishnav'){
			e.preventDefault();
		}
		//给当前链接的li添加active类，并删除同级其它li的active类
       		$(this).parent('li')
          		.addClass("active")
          		.siblings().removeClass("active");
		//平滑滚动，时间为1秒  
        	$("html,body").animate({scrollTop: pos}, 1000, 'easeInOutExpo',function(){
        		//改变url的值但并不刷新页面
			location.hash = href;
		});
        	return false;
    	});
	
	/*在两个页面之间跳转时，通过url参数判断对应的li，添加active类*/
	//获取完整url	
	var url = location.href;
	//需要添加active类的目标变量
	var target='';
	
	$(".placeinfo a").click(function(e){
		e.preventDefault();
        	var href = $(this).attr("href");
        	var pos = $(href).offset().top;
		
		//从#loc .content的“猛戳这里”向#forum平滑滚动并设置active类		
		$('.forumnav').parent('li')
          		.addClass("active")
          		.siblings().removeClass("active");  
        	$("html,body").animate({scrollTop: pos}, 1000, 'easeInOutExpo',function(){
        	});
        	return false;
    	});
	
	//如果是url中包含'wish.html'，向.wishnav添加
	if(url.match('wish.html') == 'wish.html'){
		target = '.wishnav';
	}else{
		//如果url中没有'wish.html'且不包含'#'，默认选择.aboutnav
		if(url.match('#') == null){
			target = '.aboutnav';
		}else{
			//页面内部锚点间跳转，判断#后面的参数
			url = url.split('#')[1];
			target = "."+url+'nav';
		}
	}
	//对应添加或删除active类
	$(target).parent('li').addClass('active');
	$(target).parent('li').siblings().removeClass("active");

	//点击地图图片时，加载动态可缩放地图 
	$('.map img').click(function(e){
		$('.map').load('iframe/map.html');
	})

	//设置相册中图片可移动
    	$('#pics .iw_thumbs li').draggable();
	//移动背景
	setInterval(a,100);	
});
