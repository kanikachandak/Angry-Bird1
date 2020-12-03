class Pig
{
    constructor(x,y)
    {
        var options={restitution:0.9,
                    density:0.6,
                    friction:0.5};
        this.pig=Bodies.rectangle(x,y,50,50,options);
        this.height=50;
        this.width=50;
        World.add(world, this.pig);
    }

    display()
    {
        push();
        translate(this.pig.position.x, this.pig.position.y);
        rotate(this.pig.angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
    }
}