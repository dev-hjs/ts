interface Action{
    run() : string;
    setSpeed(speed:number) : void;
}
class Rebot implements Action{
    speed:number = 30;
    run(){
        return "로봇이" + this.speed
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
}
class Person implements Action{
    speed:number = 30;
     run (){
         return this.speed + "정도로 뜁니다."
     }   
     setSpeed(speed:number):void{
         this.speed = speed;
     }
}

let p:Action = new Person();
p.setSpeed(50);
let str4 : string = p.run();
console.log(str4);
let r:Action = new Rebot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
r=p;