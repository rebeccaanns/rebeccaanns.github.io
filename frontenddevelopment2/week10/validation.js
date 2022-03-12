//simple
const email = document.getElementById("mail");

email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity("I am expecting an email address");
        email.reportValidity();
    }
    else{
        email.setCustomValidity("");
    }
});

//complex
const form = document.getElementsByTagName('form')[0];

const email2 = document.getElementById('mail2');
const email2Error = document.querySelector('#mail2 + span.error');

email2.addEventListener('input', function(event){
    if(email2.validity.valid){
        email2Error.textContent = '';
        email2Error.className = 'error';
    }
    else{
        showError();
    }
});

form.addEventListener('submit', function(event){
    if(!email2.validity.valid){
        showError();
        event.preventDefault();
    }
});

function showError(){
    if(email2.validity.valueMissing){
        email2Error.textContent = 'You need to enter an email address.';
    }
    else if(email2.validity.typeMismatch){
        email2Error.textContent = "Entered value needs to be an email address.";
    }
    else if(email2.validity.tooShort){
        email2Error.textContent = `Email should be at least ${email2.minLength} characters. You entered ${email2.value.length}.`;
    }

    email2Error.className = 'error active';
}