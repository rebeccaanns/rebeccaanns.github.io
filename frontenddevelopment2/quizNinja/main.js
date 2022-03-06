const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
    {
        name: "Iron Man",
        realName: "Tony Stark"
    }, 
    {
        name: "Hulk",
        realName: "Bruce Banner"
    },
    {
        name: "Spider-Man",
        realName: "Peter Parker"
    },
    {
        name: "Captain America",
        realName: "Steve Rogers"
    }
];

//randomize questions
function random(a, b=1) {
    if(b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array){
    for (let i = array.length; i; i--){
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i-1]];
    }
}

//view object
const view = {
    score: document.querySelector('#score strong'),

    question: document.getElementById('question'),

    result: document.getElementById('result'),

    info: document.getElementById('info'),

    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    start: document.getElementById('start'),

    show(element) {
        element.style.display = "block";
    },

    hide(element) {
        element.style.display = "none";
    },

    response: document.querySelector('#response'),

    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
    },

    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }, 

    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    },

    timer: document.querySelector("#timer strong")
};

const game = {
    //main game loop
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
    },

    ask(name) {
        if (this.questions.length > 2) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
            view.render(view.response, view.buttons(options));
        } else {
            this.gameOver();
        }
    },

    check(event) {
        event.preventDefault();

        const response = event.target.textContent;
        const answer = this.question.realName;

        if (response === answer) {
            view.render(view.result, 'Correct!', {
                'class': 'corrrect'
            });
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer is ${answer}`, {
                'class': 'wrong'
            });
        }
        this.ask();
    },

    gameOver() {
        //At the end, report the score
        view.render(view.info, `Game over! You scored ${this.score} point${this.score !== 1 ? 's' : ""}`);

        view.teardown();

        clearInterval(this.timer);
    },

    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if (game.secondsRemaining < 0) {
            game.gameOver();
        }
    }

}

view.start.addEventListener('click', () => game.start(quiz), false);

view.response.addEventListener('click', (event) => game.check(event), false);