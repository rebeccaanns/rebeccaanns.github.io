const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://zoo-animal-api.herokuapp.com/animals/rand/", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        displayAnimal(result)
    })
    .catch(error => console.log('error', error));

function displayAnimal(result) {
    const animalDiv = document.getElementById("animal");
    const headDiv = document.createElement('div');

    //name
    const animalName = result.name;
    const nameHeading = document.createElement("h1");
    nameHeading.innerHTML = animalName;
    headDiv.appendChild(nameHeading);

    //latin name
    const latinName = result.latin_name;
    const latinHeading = document.createElement("h2")
    latinHeading.innerHTML = latinName;
    headDiv.appendChild(latinHeading);

    animalDiv.appendChild(headDiv);

    const everythingDiv = document.createElement('div');
    everythingDiv.setAttribute("id", "everything");

    //type
    const type = result.animal_type;
    const typeHeading = document.createElement("h3")
    typeHeading.innerHTML = type;
    everythingDiv.appendChild(typeHeading);

    //SIZE
    //size divs
    let sizeDiv = document.createElement('div');
    let lengthDiv = document.createElement('div');
    let weightDiv = document.createElement('div');

    //size-length
    const lengthLabel = document.createElement('label');
    lengthLabel.textContent = "Length: ";
    const minLength = document.createElement('span');
    minLength.textContent = result.length_min;
    const thru = document.createElement('span');
    thru.textContent = " - ";
    const maxLength = document.createElement('span');
    maxLength.textContent = result.length_max;
    const feet = document.createElement('span');
    feet.textContent = " feet";

    lengthDiv.appendChild(lengthLabel);
    lengthDiv.appendChild(minLength);
    lengthDiv.appendChild(thru);
    lengthDiv.appendChild(maxLength);
    lengthDiv.appendChild(feet);

    //size-weight
    const weightLabel = document.createElement('label');
    weightLabel.textContent = "Weight: ";
    const minWeight = document.createElement('span');
    minWeight.textContent = result.weight_min;
    const thru2 = document.createElement('span');
    thru2.textContent = " - ";
    const maxWeight = document.createElement('span');
    maxWeight.textContent = result.weight_max;
    const lbs = document.createElement('span');
    lbs.textContent = " lbs";

    weightDiv.appendChild(weightLabel);
    weightDiv.appendChild(minWeight);
    weightDiv.appendChild(thru2);
    weightDiv.appendChild(maxWeight);
    weightDiv.appendChild(lbs);

    sizeDiv.appendChild(lengthDiv);
    sizeDiv.appendChild(weightDiv);

    everythingDiv.appendChild(sizeDiv);

    //LIVING
    //living divs
    let livingDiv = document.createElement('div');
    let habitatDiv = document.createElement('div');
    let geoDiv = document.createElement('div');

    //living-habitat
    const habitatLabel = document.createElement('label');
    habitatLabel.textContent = "Habitat: ";
    const habitat = document.createElement('span');
    habitat.textContent = result.habitat;

    habitatDiv.appendChild(habitatLabel);
    habitatDiv.appendChild(habitat);

    //living-geo
    const geoLabel = document.createElement('label');
    geoLabel.textContent = "Geographical Location: ";
    const geo = document.createElement('span');
    geo.textContent = result.geo_range;

    geoDiv.appendChild(geoLabel);
    geoDiv.appendChild(geo);

    livingDiv.appendChild(habitatDiv);
    livingDiv.appendChild(geoDiv);

    everythingDiv.appendChild(livingDiv);

    //LIFE
    //life divs
    let lifeDiv = document.createElement('div');
    let ageDiv = document.createElement('div');
    let foodDiv = document.createElement('div');

    //life-age
    const ageLabel = document.createElement('label');
    ageLabel.textContent = "Average Lifespan: ";
    const age = document.createElement('span');
    age.textContent = result.lifespan;
    const years = document.createElement('span');
    years.textContent = " years";

    ageDiv.appendChild(ageLabel);
    ageDiv.appendChild(age);
    ageDiv.appendChild(years);

    //life-food
    const foodLabel = document.createElement('label');
    foodLabel.textContent = "Diet: ";
    const food = document.createElement('span');
    food.textContent = result.diet;

    foodDiv.appendChild(foodLabel);
    foodDiv.appendChild(food);

    lifeDiv.appendChild(ageDiv);
    lifeDiv.appendChild(foodDiv);

    everythingDiv.appendChild(lifeDiv);

    //picture
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute("src", result.image_link);

    imageDiv.appendChild(image);

    headDiv.appendChild(imageDiv);

    animalDiv.appendChild(everythingDiv);

}