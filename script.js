import { Effect } from "./effect.js";
const image = new Image();
image.src = "angler.png";
image.addEventListener("load", function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: undefined, y: undefined };
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        ////console.log(mouse.x)
    }); 
    const effect = new Effect(canvas, ctx, image, mouse);
    effect.init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.draw();
        effect.update();
        requestAnimationFrame(animate);
    }
    animate();
});

