init= () => {
	// for (var i = 0; i < 5; i++) {
	// 	$('.container').append('.asset');
	// }
	$('.asset').each(function (index) {
		$(this).css({
			left: ((Math.random() * $('.container').width())),
			bottom: ((Math.random() * $('.container').height()))
		});
	});


	// const width = $('#container').width()
	// const height = $('#container').height();
	// console.log(height)
	
	// // console.log(width)
	
	// let min_x = 0;
	// let max_x = height;
	// let min_y = 0;
	// let max_y = width;
	// let filled_areas = new Array();

	// $('.asset').each(function () {
	// 	let rand_x = 0;
	// 	let rand_y = 0;
	// 	let area;
	// 	do {
	// 		rand_x = Math.round(min_x + ((max_x - min_x) * (Math.random() % 1)));
	// 		rand_y = Math.round(min_y + ((max_y - min_y) * (Math.random() % 1)));
	// 		area = { x: rand_x, y: rand_y, width: $(this).width(), height: $(this).height() };
	// 	} while (check_overlap(area));

	// 	filled_areas.push(area);

	// 	$(this).css({ left: rand_x, top: rand_y });
	// });

	// function check_overlap(area) {
	// 	for (let i = 0; i < filled_areas.length; i++) {

	// 		check_area = filled_areas[i];

	// 		let bottom1 = area.y + area.height;
	// 		let bottom2 = check_area.y + check_area.height;
	// 		let top1 = area.y;
	// 		let top2 = check_area.y;
	// 		let left1 = area.x;
	// 		let left2 = check_area.x;
	// 		let right1 = area.x + area.width;
	// 		let right2 = check_area.x + check_area.width;
	// 		if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) {
	// 			continue;
	// 		}
	// 		return true;
	// 	}
	// 	return false;
	// }
	$('.button').on('click ', function (e) {
			location.reload();
	});

	// let text = document.querySelectorAll(".asset");
	// let btn = document.querySelector("button");

	// text = Array.from(text)

	// text.forEach(function (current, index) {
	// 	current.addEventListener('animationend', function () {
	// 		let next = text[index + 1]

	// 		current.style.animationName = ''

	// 		next.style.animationName = 'roll'

	// 	})
	// })


	// btn.addEventListener("click", function () {
	// 	text[0].style.animationName = "ott"
	// })


}
$(function() {

	init();
	AOS.init();


	// $(window).scroll(function () {
	// 	$('.asset').each(function () {
	// 		let imagePos = $(this).offset().top;
	// 		let imageHeight = $(this).height();
	// 		let topOfWindow = $(window).scrollTop();

	// 		if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
	// 			$(this).addClass("swirl");
	// 		} else {
	// 			$(this).removeClass("swirl");
	// 		}
	// 	});
	// });
});