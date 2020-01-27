class Wall {
    constructor(src, x, y, h, w) {
        this.src = src;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    }
}