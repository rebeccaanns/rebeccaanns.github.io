//change background color
const colorButton = document.getElementById("rainbow");
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change(){
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

colorButton.addEventListener('click', change);

//factorize numbers
const form = document.forms[0];
form.addEventListener('submit', factorize, false);

function factorize(event){
    //prevent form from submitting
    event.preventDefault();
    document.getElementById('output').innerHTML = '<p>This could take a while...</p>';

    const number = Number(form.number.value);
    
    if(window.Worker){
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
            document.getElementById('output').innerHTML = event.data;
        }, false);
    }
}
