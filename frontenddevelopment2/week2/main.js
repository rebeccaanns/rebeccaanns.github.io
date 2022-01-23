function calculate() {
    let input = parseFloat(document.querySelector('#input').value);
    let output = 0;

    for (let i = 1; i <= input; i++) {
        output += i;
    }
    document.querySelector('#output').textContent = `The sum of all numbers up to ${input} is: ${output}`;
}

function sum() {
    let input = parseFloat(document.querySelector('#input').value);
    let input2 = parseFloat(document.querySelector('#input2').value);
    let output;
    output = input + input2;

    document.querySelector('#output2').textContent = `The sum of both values is: ${output}`;
}

function product() {
    let input = parseFloat(document.querySelector('#input').value);
    let input3 = parseFloat(document.querySelector('#input3').value);
    let output;
    output = input * input3;

    document.querySelector('#output3').textContent = `The product of both values is: ${output}`;
}