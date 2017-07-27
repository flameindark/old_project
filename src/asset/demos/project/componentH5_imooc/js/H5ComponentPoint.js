var H5ComponentPoint = function (name,cfg) {
	var component = new H5ComponentBase(name,cfg);

	var base = cfg.data[0][1];

	$.each(cfg.data,function (index,item) {
		var point = $('<div class="point point_'+index+'">');
		
		var name = $('<div class="name">'+item[0]+'</div>');
		var rate = $('<div class="per">'+(item[1]*100)+'%</div>');

		name.append(rate);
		point.append(name);

		var per = (item[1]/base*100)+'%';
		point.width(per).height(per);
		if (item[2]) {
			point.css('backgroundColor',item[2]);
		}
		if ( item[3] !== undefined && item[4] !== undefined ) {
			point.css('left',item[3]).css('top',item[4]);
		}
		point.on('click',function () {
			component.find('.h5_component_name_point_current').removeClass('h5_component_name_point_current');
			point.addClass('h5_component_name_point_current');
		})
		component.append(point);
	});
	component.find('.point').eq(0).addClass('h5_component_name_point_current');
	return component;
}