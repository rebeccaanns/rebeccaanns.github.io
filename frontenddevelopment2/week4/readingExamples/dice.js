class Dice {
    constructor(sides=6){
        this.sides = sides;
        Object.defineProperty(this, 'sides', {
            get() {
                return `This dice has ${sides} sides`;
            },
            set(value) {
                if(value > 0){
                    sides = value;
                    return sides;
                }
                else {
                    throw new Error('The number of sides must be positive')
                }
            }
        });
        this.roll = function(){
            return Math.floor(sides * Math.random() + 1);
        }
    }

    static description(){
        return "A way of choosing random numbers"
    }
}

const redDice = new Dice;

//20 sides
const blueDice = new Dice(20);