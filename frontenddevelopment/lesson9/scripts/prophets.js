const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                person => {
                    console.table(person.prophets);
                    let prophet = (person);
                });
    });

