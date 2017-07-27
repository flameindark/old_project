//为导航栏中的元素增加背景,为了减少css重复代码
	function getBg () {
		var oUl=g('nav_ul');
		var aA=oUl.getElementsByTagName('a');
		for (var i = 0; i < aA.length; i++) {
			this.index=i;
			aA[i].style.background="url(img/nav-"+(this.index+1)+".png) no-repeat"
		};
	}
//为底部的notice,news,link动态设置高度,使它们统一为最高的高度

	function setHeight () {
		var a=eval(g('news').offsetHeight);
		var b=eval(g('link').offsetHeight);
		var c=eval(g('notice').offsetHeight);
		var max=[a,b,c];
		//
		var padding=function  (id) {
			if (g('news').currentStyle) 
				return eval(g(id).currentStyle.paddingBottom.split(/\D/)[0]);
			else
			return eval(getComputedStyle(g(id),false)['padding-bottom'].split(/\D/)[0]);
		}
		var result=max.sort()[2]-padding('news');
		g('news').style.height=g('link').style.height=g('notice').style.height=result+'px';
	}

//定义函数用来获取对象	
	var g=function  (id) {
		if(id.substr(0,1)=='.'){
    	var tags = document.getElementsByTagName(id);  
   	 	var returns = new Array();  
      
    		if (tags != null && tags.length > 0) {  
        	for (var i = 0; i < tags.length; i++) {  
            	if (tags[i].getAttribute("name") == eName) {  
                returns[returns.length] = tags[i];  
            	}  
       		}  
   			}  
    	return returns;   
		}
		return document.getElementById(id);
	}
//图片切换
	var timer      = null;
	var autoTime   = null;
	var ms         = 100;
	var autoMs     = 4000;
	var iTarget    = 0;
	var speed      = 0;
	var nextTarget = 0;

	 function switchSliders()
	{
	    var obj    = document.getElementById("play");
	    var oOl    = obj.getElementsByTagName("ol")[0];
	    var aLis   = oOl.getElementsByTagName("li");
	    var oUl    = obj.getElementsByTagName("ul")[0];
	    var oUlLis = oUl.getElementsByTagName("li");
	    var oPrev  = obj.getElementsByTagName("p")[0];
	    var oNext  = obj.getElementsByTagName("p")[1];

	    oUl.style.width = oUlLis.length * oUlLis[0].offsetWidth + "px";

	    for( var i = 0; i < aLis.length; i+=1 )
	    {
	        aLis[i].onmouseover = getIndx;
	    }

	    obj.onmouseover = function()
	    {
	        clearInterval(currentTime);
	    }
	    obj.onmouseout = function()
	    {
	        if(currentTime)
	        {
	            clearInterval(currentTime);
	        }
	        currentTime = setInterval("autoPlay()",autoMs);
	    }

	    oPrev.onmousedown = fnPrev;
	    oNext.onmousedown = fnNext;

	    currentTime = setInterval("autoPlay()",autoMs);
	}

	// 前一张
	function fnPrev()
	{
	    var obj    = document.getElementById("play");
	    var oOl    = obj.getElementsByTagName("ol")[0];
	    var aLis   = oOl.getElementsByTagName("li");
	    nextTarget-=1;
	    if(nextTarget < 0){ nextTarget = aLis.length-1; }
	    goTime(nextTarget);
	}

	// 后一张
	function fnNext()
	{
	    var obj    = document.getElementById("play");
	    var oOl    = obj.getElementsByTagName("ol")[0];
	    var aLis   = oOl.getElementsByTagName("li");
	    nextTarget+=1;
	    if(nextTarget === aLis.length){ nextTarget = 0; }
	    goTime(nextTarget);
	}

	// 自动播放
	function autoPlay()
	{
	    var obj    = document.getElementById("play");
	    var oOl    = obj.getElementsByTagName("ol")[0];
	    var aLis   = oOl.getElementsByTagName("li");

	    nextTarget+=1;
	    if( nextTarget >= aLis.length ) { nextTarget = 0; }
	    goTime(nextTarget)
	}

	// 获取当前的索引值
	function getIndx()
	{
	    var obj    = document.getElementById("play");
	    var oOl    = obj.getElementsByTagName("ol")[0];
	    var aLis   = oOl.getElementsByTagName("li");

	    for( var i = 0; i < aLis.length; i+=1 )
	    {
	        if(aLis[i] === this)
	        {
	            goTime(i);
	        }
	    }
	}

	// 开始启动
	function goTime(index)
	{
	    var obj      = document.getElementById("play");
	    var oUl      = obj.getElementsByTagName("ul")[0];
	    var oOl      = obj.getElementsByTagName("ol")[0];
	    var aLis     = oOl.getElementsByTagName("li");
	    var iLiWidth = oUl.getElementsByTagName("li")[0].offsetWidth;

	    for( var i = 0; i < aLis.length; i+=1 )
	    {
	        aLis[i].className = "";
	    }
	    aLis[index].className = "active";

	    iTarget = -index * iLiWidth;

	    if(timer){ clearInterval(timer); }
	   timer = setInterval("doMove("+ iTarget +")",ms)
	   doMove(iTarget);
	}

	// 图片滑动
	function doMove(target)
	{
	   var obj = document.getElementById("play");
	    var oUl = obj.getElementsByTagName("ul")[0];

	    oUl.style.left = speed + "px";
	    speed+=(target - oUl.offsetLeft)/3;

	    if( Math.abs(target-oUl.offsetLeft) === 0 )
	    {
	        oUl.style.left = target + "px";
	        clearInterval(timer); timer = null;
	    }
	}
		
	//将时间动态显示
		function replaceDate () {
			var myDate = new Date();
			var hour=myDate.getHours()>=10?myDate.getHours():("0"+myDate.getHours());
			var minu=myDate.getMinutes()>=10?myDate.getMinutes():("0"+myDate.getMinutes());
			var sec=myDate.getSeconds()>=10?myDate.getSeconds():("0"+myDate.getSeconds());

			var day=['日','一','二','三','四','五','六']
			var html_date=g('date').innerHTML.replace(/{{year}}/g,'2015')
											 .replace(/{{month}}/g,myDate.getMonth())
											 .replace(/{{date}}/g,myDate.getDate())
											 .replace(/{{hour}}/g,hour)
											 .replace(/{{minu}}/g,minu)
											 .replace(/{{sec}}/g,sec)
											 .replace(/{{n}}/g,day[myDate.getDay()])
											 .replace(/{{lunarday}}/g,GetCNDate())
											 .replace(/{{week}}/g,getWeeks());
			g('date').innerHTML=html_date;
		}

	//获得学期周,这个不知道怎么写，具体开学日期不清楚。好像每年都不一样。。。
	function getWeeks () {
		var now=new Date();
		var month=now.getMonth()+1;
		var day=now.getDate();
		if (month-3&&8-month) {
			return Math.floor((((month-3)*30+day)/7));
		}
		else if(month-9||3-month){
			if (month-9) {
				return (Math.floor(((month-9)*30+day)/7)-1)
			}
			 return (Math.floor(((month+9)*30+day-3)/7)-1)
		}
		else return '假期'
	}
//加载完成时
	window.onload=function  () {
		replaceDate();
		setHeight();
		getBg();
		switchSliders();
	}

