class Rubber{
	constructor(x,y,r,options)
	{
	options={
		'density':0.3,
		'friction':5,
		'restitution':1,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0, 0, this.width, this.height);
			pop()
	}

}