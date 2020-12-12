class Stone {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
 }
  this.body=Bodies.circle(x,y,radius/2,options);
  this.radius=radius;
  
  this.image=loadImage("stone.png")
  World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(this.radius)
        image(this.image, 0, 0, this.radius*2);
        pop();
    }
}