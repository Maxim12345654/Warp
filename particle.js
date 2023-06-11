export class Particle{
    constructor(canvas,ctx,x,y,color){
    this.ctx = ctx;
    this.canvas = canvas;
    this.color = color;
    this.ox = x;
    this.oy = y;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = 1;
    }
    draw(){
        this.ctx.fillStyle = "red";///this.color;
        this.ctx.rect(this.x,this.y,this.size,this.size);
        

    }
    update(){

    }

}