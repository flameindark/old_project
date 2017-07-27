var H5ComponentPie = function (name,cfg) {
	var component = new H5ComponentBase(name,cfg);

	//添加背景层画布
	var w = cfg.width;
	var h = cfg.height;

	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex','1');
	component.append(cns);

	var r = w/2;
	// 加一个底图层
	ctx.beginPath();
	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.lineWidth = 1;
	ctx.arc(r,r,r,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	
	//添加一个画布 --绘制数据层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex','2');
	component.append(cns);

	var colors = ['red','green','blue','orange','gray'];
	var sAngel = 1.5 * Math.PI;//设置饼图的起始角度为12点位置
	var eAngel = 0; //结束角度
	var aAngel = Math.PI * 2;//正圆弧度

	
	var step = cfg.data.length;
	for (var i = 0; i < step; i++) {
		
		var item = cfg.data[i];
		var color = item[2] ? item[2] : colors.pop();
		// var color = item[2] ||( item[2] = colors.pop());//跟上面的代码一样
		eAngel = sAngel + aAngel * item[1];

		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.lineWidth = 1;
		ctx.moveTo(r,r);
		ctx.arc(r,r,r-2,sAngel,eAngel);
		ctx.fill();
		ctx.stroke();

		sAngel = eAngel;

		//加入项目文本和百分比
		var text = $('<div class="text">');
		text.text(cfg.data[i][0]);
		var per = $('<div class="per">');
		per.text(cfg.data[i][1]);
		text.append(per);

		var x = r + Math.sin(.5 * Math.PI - sAngel)*r;
		var y = r + Math.cos(.5 * Math.PI - sAngel)*r;

		if (x>w/2) {
			text.css('left',x/2);
		}else{
			text.css('right',(w-x)/2);
		}

		if (y>h/2) {
			text.css('top',y/2);
		}else{
			text.css('bottom',(h-y)/2);
		}

		//添加自定义颜色
		if (cfg.data[i][2]) {
			text.css('color',cfg.data[i][2]);
		}
		text.css('opacity',0);
		component.append(text);
	}

	//添加一个蒙版层 
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex','3');
	component.append(cns);

	ctx.beginPath();
	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.arc(r,r,r,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	var draw = function (per) {
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.moveTo(r,r);
		if (per <=0 ) {
			ctx.arc(r,r,r,0,2*Math.PI);
		}else if(per>=1){
			//由于ctx.arc方法即使起始角和结束角一样，
			//也会画一条线，故在此对per>=1不做处理
		}else{
			ctx.arc(r,r,r,sAngel,sAngel+2*Math.PI*per,true);
		}

		ctx.fill();
		ctx.stroke();
		if (per>=1) {
			component.find('.text').css('opacity',1);	
			ctx.clearRect(0,0,w,h);
		}
		if(per<=0){
			component.find('.text').css('opacity',0);	
		}
	}

	component.on('onLoad',function () {
		var s = 0;
		for(var i =0;i<100;i++){
			var index = i;
			setTimeout(function(){
				s+=.01;
				draw(s);
			},index*10+500)
		}
	});
	component.on('onLeave',function () {
		var s = 1;
		for(i =0;i<100;i++){
			var index = i;
			setTimeout(function(){
				s-=.01;
				draw(s);
			},index*10);
		}
	});

	return component;
}