$(function(){
	/*背景图片移动初始化*/
	var i = 3000;
	function a(){
		--i || (i = 3000);
		$('#clouds').css('background-position',i);
	}
	//设定背景图片移动的间隔时间
	setInterval(a,100);

	//根据浏览器窗口大小调整每屏最小高度
	var height = window.innerHeight;
	$('.wrapper').css('min-height',height);

	/*离婚期的天数计算*/
	//婚期设置
	var timedate= new Date('January 19,2014');
	//现在的时间    
	var now = new Date();    
	//根据时间差计算天数
	var date = timedate.getTime() - now.getTime();    
	var time = Math.floor(date / (1000 * 60 * 60 * 24));    
	if (time >= 0) ;   
	//写入天数到指定位置
	$('#days span').html(time);
	
	/*在两个页面之间跳转时，通过url参数判断对应的li，添加active类*/
        //获取完整url   
        var url = location.href;
        //需要添加active类的目标变量
        var target='';
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

});
