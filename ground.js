class Ground
{
    constructor(x,y,width)
    {
        this.ground=Bodies.rectangle(x,y,width,20, {isStatic:true});
        this.width=width;
        this.height=20;
        World.add(world,this.ground);
    }
    display()
    {
        rectMode(CENTER);
        fill("green");
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
    }
}