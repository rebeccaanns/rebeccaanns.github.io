//EVENTS
const sodaEventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(sodaEventURL)
    .then(responses => {
        responses.json()
            .then(
                responses => {
                    const towns = responses.towns;
                    console.table(towns);

                    towns.forEach(
                        (town, index) => {
                            if (town.name.toLowerCase() === 'soda springs') {
                                document.querySelector('#sodaEventOne')
                                    .textContent = town.events[0];

                                document.querySelector('#sodaEventTwo')
                                    .textContent = town.events[1];

                                document.querySelector('#sodaEventThree')
                                    .textContent = town.events[2];    
                            }
                        }
                    );
                }
            )
    });