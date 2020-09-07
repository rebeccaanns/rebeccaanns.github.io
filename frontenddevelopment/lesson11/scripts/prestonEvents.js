//EVENTS
const prestonEventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(prestonEventURL)
    .then(responses => {
        responses.json()
            .then(
                responses => {
                    const towns = responses.towns;
                    console.table(towns);

                    towns.forEach(
                        (town, index) => {
                            if (town.name.toLowerCase() === 'preston') {
                                document.querySelector('#prestonEventOne')
                                    .textContent = town.events[0];

                                document.querySelector('#prestonEventTwo')
                                    .textContent = town.events[1];

                                document.querySelector('#prestonEventThree')
                                    .textContent = town.events[2];    
                            }
                            // else if (town.name.toLowerCase() === 'soda springs') {
                            //     document.querySelector('#sodaEventOne')
                            //         .textContent = town.events[0];

                            //     document.querySelector('#sodaEventTwo')
                            //         .textContent = town.events[1];

                            //     document.querySelector('#sodaEventThree')
                            //         .textContent = town.events[2];    
                            // }
                            // else if (town.name.toLowerCase() === 'fish haven') {
                            //     document.querySelector('#fishEventOne')
                            //         .textContent = town.events[0];

                            //     document.querySelector('#fishEventTwo')
                            //         .textContent = town.events[1];

                            //     document.querySelector('#fishEventThree')
                            //         .textContent = town.events[2];  
                                      
                            //     document.querySelector('#fishEventFour')
                            //         .textContent = town.events[3];  
                            // }
                        }
                    );
                }
            )
    });