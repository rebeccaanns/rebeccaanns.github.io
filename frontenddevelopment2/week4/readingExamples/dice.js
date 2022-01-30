const Dice = function(sides = 6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}

const redDice = new Dice();

const blueDice = new Dice(20);