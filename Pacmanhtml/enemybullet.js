class EnemyBullet{
  constructor(x, y, h, w, c, ySpeed){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.c = c;
    this.ySpeed = ySpeed;
  }

  draw(){
      canvasContext.fillStyle = this.c;
      canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  move(){
    this.y += this.ySpeed;
  }

  outOfBounds(){
    return this.y < 0;
  }

  hasHitItem(item){
    return ((this.x + this.w) >= item.x && this.x < (item.x + item.w)) && ((this.y + this.h) >= item.y
    && this.y <= (item.y + item.h));
  }

  hasHitPlayer(player){
    return this.hasHitItem(player);
  }

  hasCollided(){
      if (self.hasHitPlayer(player)) {
        console.log('hit');
      }
  }

}
