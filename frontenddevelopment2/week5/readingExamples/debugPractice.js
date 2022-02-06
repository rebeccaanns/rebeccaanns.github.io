'use strict';

function oldEnough(age){
    if (age < 12){
        // alert(age);
        return 'No, sorry.';
    }
    else if(age < 18){
        return "Only if you are accompanied by an adult";
    }
    else {
        return "Yep, come on in";
    }
}

function squareRoot(number){
    if (number < 0){
        throw new RangeError("You can't find the square root of negative numbers");
    }
    return Math.sqrt(number);
}
// test('square root of 4 is 2', () => {
//     expect(squareRoot(4).toBe(2));
// })

function imaginarySquareRoot(number){
    let answer;
    try{
        answer = String(squareRoot(number));
    }
    catch(error){
        answer = squareRoot(-number)+'i';
    }
    finally{
        return `+ or - ${answer}`;
    }
}