window.onload=function  () {

	var date=new Date(),
		today=date.getDate(),
		oMask=document.getElementById('mask'),
		oOprateTips=document.getElementById('oprateTips'),
		aStep=oOprateTips.getElementsByTagName('div'),
		aNext=oOprateTips.getElementsByTagName('a'),
		aClose=oOprateTips.getElementsByTagName('span'),
		oLogin=document.getElementById('user_login').getElementsByTagName('a')[0],
		oLogChart=document.getElementById('login'),
		oLogClose=oLogChart.getElementsByTagName('span')[0],
		oLogName=oLogChart.getElementsByTagName('input')[0],
		oLoginBtn=oLogChart.getElementsByTagName('input')[2],
		aTopicTitle=getElementsByClassName('topic_header')[0].getElementsByTagName('a'),
		aTopics=getElementsByClassName('topics'),
		oToTop=document.getElementById('toTop'),
		aVideo=getElementsByClassName('content_col_normal');

	// 设置遮罩的高度
	oMask.style.height=document.documentElement.scrollHeight+'px';
	// 读取是否新客户cookie
	var res=document.cookie.substring(7);

	oOprateTips.style.display="none";
	oMask.style.display="none";
	oLogChart.style.display="none";
	
	// 新手引导的实现
	if (!res) {
		oOprateTips.style.display="block";
		oMask.style.display="block";
		for (var i = 0; i < aStep.length; i++) {
			aStep[i].style.display="none";
			aStep[0].style.display="block";
			aNext[i].index=i;
			aNext[i].onclick=function () {
				if (this.index<aNext.length-1) {
				aStep[this.index].style.display="none";
				aStep[this.index+1].style.display="block";
				document.documentElement.scrollTop=document.body.scrollTop=aStep[this.index+1].offsetTop-200;
				}
				else{
					document.documentElement.scrollTop=0;
					oOprateTips.style.display="none";
					oMask.style.display="none";
				}
			}
			aClose[i].onclick=function () {
				oOprateTips.style.display="none";
				oMask.style.display="none";
			}
		}
	} 
	// 设置新手引导cookie，10天后过期
	var date=new Date();
	var today=date.getDate();
	date.setDate(today+10);
	document.cookie="userid=11;expire="+date;

	// 登录的弹出层的实现
	oLogin.onclick=function () {
		oMask.style.display=oLogChart.style.display="block";
		oLogClose.onclick=oMask.onclick=function () {
			oMask.style.display=oLogChart.style.display="none";
		}
	}

	// 标签页的实现
	for (var i = 0; i < aTopicTitle.length; i++) {
		aTopicTitle[i].index=i;
		aTopics[i].style.display='none';
		aTopics[0].style.display="block";
		aTopicTitle[i].onmouseover=function () {
			for (var i = 0; i < aTopicTitle.length; i++) {
				aTopicTitle[i].className="";
				aTopics[i].style.display="none";
			}
			this.className='chosen';
			aTopics[this.index].style.display='block';
		}
	}

	// 回到顶部的效果的实现(用js实现比用单纯的锚点实现体验更佳)
	var timer=null;
	window.onscroll=function () {
		if (document.documentElement.scrollTop>=document.documentElement.clientHeight||
			document.body.scrollTop>=document.documentElement.clientHeight) {
			oToTop.style.display="block";
		}else{
			oToTop.style.display="none";
		}
	}
	oToTop.onclick=function () {
		timer=setInterval(function () {
			disTop=document.documentElement.scrollTop+document.body.scrollTop;
			ispeed=Math.floor(-disTop/5);
			document.documentElement.scrollTop=document.body.scrollTop=disTop+ispeed;
			if (disTop==0) {
				clearInterval(timer);
			}
		},20);
	}

	// 视频鼠标移入是显示详细信息
	for (var i = 0; i < aVideo.length; i++) {
		aVideo[i].onmouseover=function () {
			this.className+=' col_hover';
			this.onmouseout=function () {
				this.className='content_col_normal';
			}
		}
	}
}

// 根据className获取元素的兼容方法
	function getElementsByClassName(className,root) {    
	//root：父节点
	    if(root){
	        root=typeof root=="string" ? document.getElementById(root) : root;   
	    }else{
	        root=document.body;
	    }                                   
	    if (document.getElementsByClassName) { 
	    	//如果浏览器支持getElementsByClassName，就直接的用
	        return root.getElementsByClassName(className);
	    }else { 
	        var tag= root.getElementsByTagName('*');  
	        var tagAll = [];                                    
	        for (var i = 0; i < tag.length; i++) {                
	            for(var j=0,n=tag[i].className.split(' ');j<n.length;j++){  
	                if(n[j]==className){
	                    tagAll.push(tag[i]);
	                    break;
	                }
	            }
	        }
	        return tagAll;
	    }
	}