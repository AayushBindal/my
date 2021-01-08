class Box3{
    constructor(x,y,width,height){
        var options = {
            'friction': 1,
            'restitution': 0.01,
            'density': 2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.visibility = 255;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<5){
            var pos = this.body.position;
            rectMode(CENTER);
            fill("lightGreen");
            rect(pos.x, pos.y, this.width, this.height);
        }
        else {
            push();
            this.visibility = this.visibility- 5;
            tint(255, this.Visibility);
            World.remove(world, this.body);
            pop();
        }
    }
    score(){
  if(this.Visiblity <221 && this.Visiblity> 216){ 
            score++;
        }
    }
}