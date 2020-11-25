class Box{
  constructor(x, y, width, height){
    var options = {
      restitution:0.4,
      friction:1.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }

  score(){
    if(this.Visibility < 0 && this.Visibility > -100){
      score ++
    }
  }

  display(){
    //console.log(this.body.speed);
 
    if(this.body.speed < 15){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("yellow");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world,this.body); 
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
    }
  }
}