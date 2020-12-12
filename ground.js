class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y,this.width,this.height);
        rectMode(CENTER);
        pop();
    }
}