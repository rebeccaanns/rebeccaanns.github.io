//EVENTS
const fishEventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(fishEventURL)
    .then(responses => {
        responses.json()
            .then(
                responses => {
                    const towns = responses.towns;
                    console.table(towns);

                    towns.forEach(
                        (town, index) => {
                            if (town.name.toLowerCase() === 'fish haven') {
                                document.querySelector('#fishEventOne')
                                    .textContent = town.events[0];

                                document.querySelector('#fishEventTwo')
                                    .textContent = town.events[1];

                                document.querySelector('#fishEventThree')
                                    .textContent = town.events[2];  
                                      
                                document.querySelector('#fishEventFour')
                                    .textContent = town.events[3];  
                            }
                        }
                    );
                }
            )
    });