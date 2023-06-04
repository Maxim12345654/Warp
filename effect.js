export class Effect{
    constructor(canvas,ctx,image){
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = image;    
        this.particleArray = [];    
    }
    init(){
        const centerx = this.canvas.width / 2 - this.image.width / 2;
        const centery = this.canvas.height / 2 - this.image.height / 2;
        this.ctx.drawImage(this.image,centerx,centery);
        const pixels = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data;
    }
}