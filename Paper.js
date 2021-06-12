class Paper {
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.15
            

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
        this.image = loadImage("paper.png")
        
    }
    display(){

        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255)
        image(this.image,0,0,70,70);
        //ellipse(CENTER);
        pop()
    }
}
	

