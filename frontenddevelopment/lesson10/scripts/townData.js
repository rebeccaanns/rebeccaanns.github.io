const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const towns = response.towns;
                    console.table(towns);

                    towns.forEach(
                        (town, index) => {
                            if (town.name.toLowerCase() === 'fish haven') {
                                //fish haven
                                document.querySelector("#fishYear")
                                    .textContent = town.yearFounded;

                                document.querySelector("#fishMotto")
                                    .textContent = town.motto;

                                document.querySelector("#fishPop")
                                    .textContent = town.currentPopulation;

                                document.querySelector("#fishRain")
                                    .textContent = town.averageRainfall;

                                document.querySelector("#fishImage")
                                    .setAttribute('src', 'images/' + town.photo);
                            } else if (town.name.toLowerCase() === 'preston') {
                                //preston
                                document.querySelector("#prestonYear")
                                    .textContent = town.yearFounded;

                                document.querySelector("#prestonMotto")
                                    .textContent = town.motto;

                                document.querySelector("#prestonPop")
                                    .textContent = town.currentPopulation;

                                document.querySelector("#prestonRain")
                                    .textContent = town.averageRainfall;

                                document.querySelector("#prestonImage")
                                    .setAttribute('src', 'images/' + town.photo);
                            } else if (town.name.toLowerCase() === 'soda springs') {
                                //soda springs
                                document.querySelector("#sodaYear")
                                    .textContent = town.yearFounded;

                                document.querySelector("#sodaMotto")
                                    .textContent = town.motto;

                                document.querySelector("#sodaPop")
                                    .textContent = town.currentPopulation;

                                document.querySelector("#sodaRain")
                                    .textContent = town.averageRainfall;

                                document.querySelector("#sodaImage")
                                    .setAttribute('src', 'images/' + town.photo);
                            }
                        }
                    );
                }
            )
    });