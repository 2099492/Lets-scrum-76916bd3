class Wall{
  constructor(src, x, y, h, w, x){
    this.src = src;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
  }

  draw(){
      canvasContext.drawRect(this.src, this.x, this.y, this.w, this.h);
  }
}
