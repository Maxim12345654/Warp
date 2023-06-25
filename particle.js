export class Particle {
    constructor(canvas, ctx, x, y, color, mouse) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.color = color;
        this.ox = x;
        this.oy = y;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = 3;
        this.mouse = mouse;

        this.dx = 0;
        this.dy = 0;

    }
    draw() {
        // this.ctx.fillStyle = "red";///this.color;
        //this.ctx.rect(this.x,this.y,this.size,this.size);
        // this.ctx.fill()
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    /*update() {
        const dx = this.mouse.x - this.x;
        const dy = this.mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        let vx = 0;
        let vy = 0;
        if (dist < 3000) {
            const a = Math.atan2(dy, dx);
            const f = -1;
            vx = f * Math.cos(a);
            vy = f * Math.sin(a);
        }
        vx *= 1.95;
        vy *= 1.95;
        this.x += vx + (this.ox - this.x) * 0.05;
        this.y += vy + (this.oy - this.y) * 0.05;
    }*/
    update() {
        this.dx = this.mouse.x - this.x;
        this.dy = this.mouse.y - this.y;

        const distance = this.dx * this.dx + this.dy * this.dy;
        const force = -3000 / distance;
         let vx = 0;
         let vy = 0;
        if (distance < 3000) {
            const angle = Math.atan2(this.dy, this.dx);
            vx = force * Math.cos(angle);
            vy = force * Math.sin(angle);
        }

        vx *= 0.95;

        vy *= 0.95;

        this.x += vx + (this.ox - this.x) * 0.05;
        this.y += vy + (this.oy - this.y) * 0.05;
    }
}
