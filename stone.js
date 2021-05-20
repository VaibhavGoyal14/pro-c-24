class stone{
    constructor(x,y,r,options)
	{
	options={
		'density':0.8,
		'friction':0.9,
		'restitution':12,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0, 0, this.width, this.height);
			pop()
	}

}