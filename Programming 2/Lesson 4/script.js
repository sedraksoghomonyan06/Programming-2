function setup(){
    var napo1=new napastak(0,0,'white',1200,8,4);
    var napo2=new napastak(100,100,'black',1500,10);
    napo1.move();
    napo2.move();
    var a=20;
   
    napo1.eat(1);
    
    napo1.eat(2);
    napo1.eat(2);
    napo1.eat(1);
    napo1.eat(0);
    napo1.eat(3);
    console.log(napo1,napo2)
}