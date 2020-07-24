// const {
// 	Engine,
// 	Render,
// 	Runner,
// 	World,
// 	Bodies,
// 	MouseConstraint,
// 	Mouse
// } = Matter;

// const width = 800;
// const height = 600;

// const engine = Engine.create();
// const { world } = engine;
// const render = Render.create({
// 	element: document.body,
// 	engine: engine,
// 	options: {
// 		wireframes: false,
// 		width,
// 		height
// 	}
// });
// Render.run(render);
// Runner.run(Runner.create(), engine);

// World.add(
// 	world,
// 	MouseConstraint.create(engine, {
// 		mouse: Mouse.create(render.canvas)
// 	})
// );

// // Walls
// const walls = [
// 	Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
// 	Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
// 	Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
// 	Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
// ];
// World.add(world, walls);

// //Random shapes

// for (let i = 0; i < 20; i++) {
// 	if (Math.random() > 0.5) {
// 	World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
// } else {
// 	World.add(
// 		world,
// 		Bodies.circle(Math.random() * width, Math.random() * height, 35)
// 	);
// }
// }

// function randomFromTo(from, to) {
// 	return Math.floor(Math.random() * (to - from + 1) + from);
// }

// function moveRandom(e) {

// 	/* get container position and size
// 	 * -- access method : cPos.top and cPos.left */
// 	const cPos = $('#container').offset();
// 	const cHeight = $('#container').height();
// 	const cWidth = $('#container').width();

// 	// get box padding (assume all padding have same value)
// 	const pad = parseInt($('#container').css('padding-top').replace('px', ''));
// 	// const pad = parseInt($('#container').css('padding','20px'));

// 	// get movable box size
// 	const bHeight = e.height();
// 	const bWidth = e.width();

// 	// set maximum position
// 	maxY = cPos.top + cHeight - bHeight - pad;
// 	maxX = cPos.left + cWidth - bWidth - pad;

// 	// set minimum position
// 	minY = cPos.top + pad;
// 	minX = cPos.left + pad;

// 	// set new position			
// 	newY = randomFromTo(minY, maxY);
// 	newX = randomFromTo(minX, maxX);
// 	e.animate({
// 		top: newY,
// 		left: newX
// 	}, 1500);
// }

// $('.move').each(function () {
// 	moveRandom($(this));
// });


// const classes = ["move"];

// $(".asset").each(function () {
// 	$(this).addClass(classes.splice(~~(Math.random() * classes.length), 1)[0]);
// });
// $('#play-video').on('click', function (ev) {
// 	this.style.display = 'none';
// 	thevid = document.getElementById('video');
// 	thevid.style.display = 'block';
// 	$("#video")[0].src += "?autoplay=1";
// 	ev.preventDefault();

// });
// var youtubeId = 'K-FQ7x9xWNQ'

$(function() {


	AOS.init();
	



});