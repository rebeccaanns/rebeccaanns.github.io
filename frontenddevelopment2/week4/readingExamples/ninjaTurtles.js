class Turtle {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.setColor = color => {
            if (typeof color === 'string') {
                return _color = color;
            }
            else{
                throw new Error('Color must be a string');
            }
        }
        this.getColor = () => _color;
    }
    sayHi(){
        return `Hi dude! My name is ${this.name}`;
    }
    swim(){
        return `${this.name} paddles in the water`;
    }
    toString() {
        return `A turtle called ${this.name}`;
    }
}

class NinjaTurtle extends Turtle{
    constructor(name, color){
        super(name, color);
        this.weapon = "hands";
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

//create new turtles
const leo = new NinjaTurtle('Leonardo');
leo.weapon = "Katana Blades";

const raph = new NinjaTurtle('Raphael', 'Red');
raph.weapon = "Sai";

const don = new NinjaTurtle('Donatello');
don.weapon = "Bo Staff";

const mike = new NinjaTurtle('Michaelangelo');
mike.weapon = "Nunchakus";

NinjaTurtle.prototype.food = "pizza";
NinjaTurtle.prototype.eat = function(){
    return `Mmm! This ${this.food} tastes great!`;
}

//array functions
Array.prototype.first = function(){
    return this[0];
}
Array.prototype.last = function(){
    return this[this.length - 1];
}

//array of the ninja turtles
const ninjas = [leo, raph, don, mike];