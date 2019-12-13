fetch('json/temples.json')
    .then(
        (response) => response.json()
    )
    .then(
        (temples) => {
            console.log(temples);
            temples.forEach(
                temple => {
                    console.log(temple);
                }
            )
        }
    )