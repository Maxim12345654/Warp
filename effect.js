import {Particle} from "./particle.js";
export class Effect {
    constructor(canvas, ctx, image) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = image;
        this.particleArray = [];
    }
    init() {
        const centerx = this.canvas.width / 2 - this.image.width / 2;
        const centery = this.canvas.height / 2 - this.image.height / 2;
        this.ctx.drawImage(this.image, centerx, centery);
        const pixels = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;

        for (let y = 0; y < this.canvas.height; y++) {
            for (let x = 0; x < this.canvas.width; x++) {
                const i = y * this.canvas.width * 4 + 4 * x;
                const red = pixels[i];
                const green = pixels[i + 1];
                const blue = pixels[i + 2];
                const alpha = pixels[i + 3];
                const color = "rgb(" + red + "," + green + "," + blue + ")";
                if (alpha > 0) {
                    const particle = new Particle(this.canvas,this.ctx,x,y,color);
                    this.particleArray.push(particle);
                }
            }
        }
    }
    draw(){
        for (let index = 0; index < this.particleArray.length; index++) {
        this.particleArray[index].draw(); 
        }
    }
    update(){
        for (let index = 0; index < this.particleArray.length; index++) {
            this.particleArray[index].update(); 
    }
    }
}