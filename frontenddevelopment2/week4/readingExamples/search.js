const form = document.forms['search'];
form.addEventListener('submit', search, false);

form.action = '/an/other.url';

function search(event){
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}

const input = form["searchInput"];

input.addEventListener('focus', function(){
    if (input.value === "Search Here") {
        input.value = ""
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === "") {
        input.value = "Search Here";
    }
}, false);

// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

