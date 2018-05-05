class napastak{
    constructor(x,y,col,w,age,max){
        this.x = x;
        this.y = y;
        this.color = col;
        this.weight = w;
        this.age = age;
        this.kercQanak = 0;
        this.max = max
    }
    move(){
        this.x++;
        this.y++;
       // this.kercQanak++;
    }
    eat(b){
        this.kercQanak+=b;
        if(this.kercQanak>=this.max){
            console.log("kusht em kerel em "+b);
            this.kercQanak=0;
        }
        else if(this.kercQanak<this.max){
            console.log("sovac em kerel em "+b);
        }
    }
}