const image = new Image();
image.src = "angler.png";
image.addEventListener("load", function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function animate(){
    canvas.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
    }
    animate();
});

