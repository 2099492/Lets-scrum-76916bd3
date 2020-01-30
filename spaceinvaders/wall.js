class Wall{
  constructor(x, y, h, w, c){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.c = c;
  }

  draw(){
      canvasContext.fillStyle = this.c;
      canvasContext.fillRect(this.x, this.y, this.w, this.h)
  }
}
