const videos = [
	{
		name: `picnic in the cemetery`,
		image: `./assets/toplayer_assets/layout_landing_noBG.gif`,
		
	}
]



init= () => {

	let filled_areas = new Array();

	$('.asset').each(function () {
		let rand_x = 0;
		let rand_y = 0;
		let area;
		do {
			rand_x = ((Math.random() * $('.container').width()));
			rand_y = ((Math.random() * $('.container').height()));
			area = { x: rand_x, y: rand_y, width: $(this).width(), height: $(this).height() };
		} while (check_overlap(area));

		filled_areas.push(area);

		$(this).css({ right: rand_x, bottom: rand_y });
	});

	function check_overlap(area) {
		for (let i = 0; i < filled_areas.length; i++) {

			check_area = filled_areas[i];

			let bottom1 = area.y + area.height;
			let bottom2 = check_area.y + check_area.height;
			let top1 = area.y;
			let top2 = check_area.y;
			let left1 = area.x;
			let left2 = check_area.x;
			let right1 = area.x + area.width;
			let right2 = check_area.x + check_area.width;
			if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) {
				continue;
			}
			return true;
		}
		return false;
	}



	
	$('.button').on('click ', function (e) {
			location.reload();
	});


}
$(function() {

	init();
	AOS.init();


});