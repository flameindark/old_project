// jQuery和前面的原生js写的有一点点区别，
// 因为想到可能用创建DOM节点的方法会使代码更优，
// 可以jQuery中使用创建DOM来实现新手引导和遮罩层

$(document).ready(function () {


	//点击登录时，绑定事件，插入mask节点。
	$('#user_login').on('click','a'[0],function () {
	    // 添加遮罩
	    newMask();
	    // 添加登录框
	    newLogin();
	    // 给关闭按钮添加事件
	    $('#login>span,#mask').on('click',function () {
	    	$('#login').remove();
	    	$('#mask').remove();
	    })
	})
	
	// 判断cookie，是否加载新手引导
	if (!$.cookie('userId')) {
		// 添加遮罩
		newMask();
		// 添加新手引导
		newGuide();
		// 让新手引导一步步显示，并移动视区
		$('#oprateTips>div').hide();
		$('#oprateTips>div:first').show();
		for (var i = 0; i < $('#oprateTips>div>a').length; i++) {
			$('#oprateTips>div>a').on('click',function () {
				if ($('#oprateTips>div>a').index($(this))+1<$('#oprateTips>div>a').length) {
					$(this).parent().hide();
					$(this).parent().next().show();
					$(document).scrollTop($(this).parent().next().offset().top-200);
				}else{
					$('#oprateTips').remove();
					$(document).scrollTop(0);
					$('#mask').remove();
				}
			})
		}
	}

	// 标签页的实现
	$('.topics').hide();
	$('.topics:first').show();
	$('.topic_header a').on('mouseover',function (e) {
		e.preventDefault();
		$('.topic_header a').removeClass('chosen');
		$(this).addClass('chosen');
		$('.topics').hide();
		$('#'+$(this).attr('title')).show();
	})

	//回到顶部的实现
	$(window).on('scroll',function () {
		if ($(this).scrollTop()>$(window).height()) {
			$('#toTop').show();
		}else{
			$('#toTop').hide();
		}
	})
	$('#toTop').on('click',function () {
		$('body,html').animate({scrollTop:0},600,'linear');
	});

	// 视频鼠标移入显示详细信息的实现
	$('.content_col_normal').on({'mouseover':function () {
		$(this).addClass('col_hover');
	},'mouseout':function () {
		$(this).removeClass('col_hover');
	}});

	// 设置cookie，cookie插件代码已经加入了jQuery文件后面
	$.cookie('userId', Math.random(), { expires: 30 });
})


function newMask() {
	// 遮罩节点的定义
	var oMask=$('<div></div>');
	
	// 给mask添加属性和样式
	oMask.appendTo($('#window'))
		 .attr('id','mask')
		 .height($(document).height())
		 .width($(document).width())
		 .css({'background': '#000',
			   'opacity': '0.7',
			   'filter': 'alpha(opacity=70)',
			   'position': 'absolute',
    		   'left': '0',
 			   'top': '0',
               'z-index': '1111',});
}
		
function newGuide() {
	// 新手引导节点的定义
	var guide=$('<div></div>');
		// 给新手引导添加属性和样式
	guide.appendTo($('#window'))
		.attr('id','oprateTips')
		.html(
			'<div class="stepA"><a>下一步</a><span title="关闭">关闭</span></div>'
			+'<div class="stepB"><a>下一步</a><span title="关闭">关闭</span></div>'
			+'<div class="stepC"><a>下一步</a><span title="关闭">关闭</span></div>'
		);
}

function newLogin() {
	// 登录框节点的定义
	var oLogin=$('<div></div>');
    //给登录框添加属性和样式
	oLogin.appendTo($('#window'))
	  	  .attr('id','login')
	  	  .html('<input type="text" class="inputA" value="请输入登录邮箱" />'
				+'<input type="text" class="inputB" value="请输入密码" />'
				+'<input type="button" class="btnA"/>'
				+'<span title="关闭"></span>');
	// 因为ie8不支持placeholder属性，给输入框加事件完成类似效果
	// 以及为关闭按钮添加事件
    $('#login>.inputA').blur(function () {
    	if(!$(this).val()){
    		$(this).val('请输入登录邮箱');
    	}
    }).on('click',function () {
    	$(this).val('');
    })

    $('#login>.inputB').blur(function () {
    	if(!$(this).val()){
    		$(this).val('请输入密码');
    	}
    }).on('click',function () {
    	$(this).val('');
    })
}