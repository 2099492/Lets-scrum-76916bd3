class Enemy{
  constructor(src,x,y,h,w,xSpeed,ySpeed){
    this.src = src;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  draw(){
    canvasContext.drawImage(this.src,this.x,this.y,this.w,this.h);
  }

  hitWall(){
    if (this.x + this.w >= canvas.width || this.x <= 0) {
      return true;
    }else {
      return false;
    }
  }

  normalMove(){
    this.x += this.xSpeed;
  }

  specialMove(){
    this.xSpeed *= -1;
    this.y += this.ySpeed;
    this.x += this.xSpeed;
    if (this.y == 300) {
      this.ySpeed = 0;
    }
    if (this.y == 250) {
      this.ySpeed = 0;
    }
    if (this.y == 200) {
      this.ySpeed = 0;
    }
    if (this.y == 151) {
    this.ySpeed = 0;
    }
  }
}
