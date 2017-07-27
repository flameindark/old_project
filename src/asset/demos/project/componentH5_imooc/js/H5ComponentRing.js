var H5ComponentRing = function (name,cfg) {
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

	//数据层
	ctx.beginPath();
	if (cfg.data[0][2]) {
		ctx.fillStyle = ctx.strokeStyle = cfg.data[0][2];
	}else{
		ctx.fillStyle = ctx.strokeStyle = '#99c0ff';
	}
	ctx.lineWidth = 1;
	ctx.moveTo(r,r);
	ctx.arc(r,r,r,-Math.PI/2,-Math.PI/2+2*Math.PI*cfg.data[0][1]);
	ctx.fill();
	ctx.stroke();

	

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
	ctx.arc(r,r,r+2,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	var draw = function (per) {
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.moveTo(r,r);
		if (per <=0 ) {
			ctx.arc(r,r,r+2,0,2*Math.PI);
		}else if(per>=1){
			//由于ctx.arc方法即使起始角和结束角一样，
			//也会画一条线，故在此对per>=1不做处理
		}else{
			ctx.arc(r,r,r+2,-Math.PI/2,-Math.PI/2+2*Math.PI*per,true);
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
	//添加一个遮罩层 
	var mask = $('<div class="mask">');
	component.append(mask);

	//加入项目文本和百分比
	var text = $('<div class="text">');
	text.text(cfg.data[0][0]);
	text.css('width',w/2);
	text.css('height',h/2);
	if (cfg.data[0][2]) {
		text.css('color',cfg.data[0][2]);
	}
	var per = $('<div class="per">');
	per.text(cfg.data[0][1]*100+'%');
	text.append(per);
	mask.append(text);

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