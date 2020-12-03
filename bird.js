class Bird
{
    constructor(x,y)
    {
        var options={restitution:0.9,
                    density:0.6,
                    friction:0.5};
        this.bird=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.bird);
    }

    display()
    {
        push()
        translate(this.bird.position.x, this.bird.position.y);
        rotate(this.bird.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}