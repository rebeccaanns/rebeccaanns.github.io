fetch('json/temples.json')
    .then(response => {
        response.json()
        .then(
        response => {
            const temples = response.temples
            console.log(temples);
            temples.forEach(
                (temple) => {
                    let card = document.createElement("article");
                    let h2 = document.createElement('h2');

                    h2.textContent = temple.templeName;

                    card.appendChild(h2);

                    //add address
                    let addressDiv = document.createElement('div');

                    let addressLabel = document.createElement('label');
                    addressLabel.textContent = "Address: ";

                    let addressSpan = document.createElement('span');
                    addressSpan.textContent = temple.address;

                    let addressTown = document.createElement('div');
                    addressTown.textContent = temple.templeLocation;

                    addressDiv.appendChild(addressLabel);
                    addressDiv.appendChild(addressSpan);
                    addressDiv.appendChild(addressTown);
                    card.appendChild(addressDiv);

                    //add contact
                    let contactDiv = document.createElement('div');
                    let phoneDiv = document.createElement('div');
                    let emailDiv = document.createElement('div');

                    let phoneLabel = document.createElement('label');
                    phoneLabel.textContent = "Phone: ";

                    let phoneSpan = document.createElement('span');
                    phoneSpan.textContent = temple.phone;

                    let emailLabel = document.createElement('label');
                    emailLabel.textContent = "Email: ";

                    let emailSpan = document.createElement('span');
                    emailSpan.textContent = temple.email;

                    phoneDiv.appendChild(phoneLabel);
                    phoneDiv.appendChild(phoneSpan);
                    emailDiv.appendChild(emailLabel);
                    emailDiv.appendChild(emailSpan);
                    contactDiv.appendChild(phoneDiv);
                    contactDiv.appendChild(emailDiv);
                    card.appendChild(contactDiv);

                    //add services
                    let serviceDiv = document.createElement("div");
                    let serviceLabel = document.createElement('label');
                    serviceLabel.textContent = "Services: ";

                    let service1 = document.createElement("li");
                    service1.textContent = temple.services[0];
                    let service2 = document.createElement("li");
                    service2.textContent = temple.services[1];
                    let service3 = document.createElement("li");
                    service3.textContent = temple.services[2];
                    let service4 = document.createElement("li");
                    service4.textContent = temple.services[3];

                    serviceDiv.appendChild(serviceLabel);
                    serviceDiv.appendChild(service1);
                    serviceDiv.appendChild(service2);
                    serviceDiv.appendChild(service3);
                    serviceDiv.appendChild(service4);
                    card.appendChild(serviceDiv);

                    //add history
                    let historyDiv = document.createElement("div");
                    let historyLabel = document.createElement('label');
                    historyLabel.textContent = "History: ";

                    let history1 = document.createElement("li");
                    history1.textContent = temple.history[0];
                    let history2 = document.createElement("li");
                    history2.textContent = temple.history[1];
                    let history3 = document.createElement("li");
                    history3.textContent = temple.history[2];

                    historyDiv.appendChild(historyLabel);
                    historyDiv.appendChild(history1);
                    historyDiv.appendChild(history2);
                    historyDiv.appendChild(history3);
                    card.appendChild(historyDiv);

                    //add sessions
                    let sessionDiv = document.createElement("div");
                    let sessionLabel = document.createElement('label');
                    sessionLabel.textContent = "Session Schedule: ";

                    let session1 = document.createElement("li");
                    session1.textContent = temple.sessionSchedule[0];
                    let session2 = document.createElement("li");
                    session2.textContent = temple.sessionSchedule[1];
                    let session3 = document.createElement("li");
                    session3.textContent = temple.sessionSchedule[2];
                    let session4 = document.createElement("li");
                    session4.textContent = temple.sessionSchedule[3];

                    sessionDiv.appendChild(sessionLabel);
                    sessionDiv.appendChild(session1);
                    sessionDiv.appendChild(session2);
                    sessionDiv.appendChild(session3);
                    sessionDiv.appendChild(session4);
                    card.appendChild(sessionDiv);

                    //add closures
                    let closureDiv = document.createElement("div");
                    let closureLabel = document.createElement('label');
                    closureLabel.textContent = "Temple Closures: ";

                    let closure1 = document.createElement("li");
                    closure1.textContent = temple.closures[0];
                    let closure2 = document.createElement("li");
                    closure2.textContent = temple.closures[1];
                    let closure3 = document.createElement("li");
                    closure3.textContent = temple.closures[2];
                    let closure4 = document.createElement("li");
                    closure4.textContent = temple.closures[3];
                    let closure5 = document.createElement("li");
                    closure5.textContent = temple.closures[4];
                    let closure6 = document.createElement("li");
                    closure6.textContent = temple.closures[5];
                    let closure7 = document.createElement("li");
                    closure7.textContent = temple.closures[6];
                    let closure8 = document.createElement("li");
                    closure8.textContent = temple.closures[7];
                    let closure9 = document.createElement("li");
                    closure9.textContent = temple.closures[8];
                    let closure10 = document.createElement("li");
                    closure10.textContent = temple.closures[9];
                    let closure11 = document.createElement("li");
                    closure11.textContent = temple.closures[10];

                    closureDiv.appendChild(closureLabel);
                    closureDiv.appendChild(closure1);
                    closureDiv.appendChild(closure2);
                    closureDiv.appendChild(closure3);
                    closureDiv.appendChild(closure4);
                    closureDiv.appendChild(closure5);
                    closureDiv.appendChild(closure6);
                    closureDiv.appendChild(closure7);
                    closureDiv.appendChild(closure8);
                    closureDiv.appendChild(closure9);
                    closureDiv.appendChild(closure10);
                    closureDiv.appendChild(closure11);
                    card.appendChild(closureDiv);

                    //add image
                    let imageDiv = document.createElement('div');
                    let image = document.createElement('img');
                    image.setAttribute("src", temple.image);

                    imageDiv.appendChild(image);
                    card.appendChild(imageDiv);
                    
                    document.querySelector('section.cards').appendChild(card);

                }
            )
        } 
    )
})