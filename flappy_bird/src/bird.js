export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.y = this.dimensions.height / 2;
        this.x = (this.dimensions.width / 3);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.height, this.width, 40, 30)
    }

    animate(ctx) {
        this.drawBird(ctx);
    }
}