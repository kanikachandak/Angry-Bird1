class Log
{
    constructor(x,y,height,angle)
    {
        var options={restitution:0.9,
            density:0.6,
            friction:0.5};
        this.log=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.log,angle);
        World.add(world,this.log);
    }

    display()
    {
        push();
        translate(this.log.position.x, this.log.position.y);
        rotate(this.log.angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}