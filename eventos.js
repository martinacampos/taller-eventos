function clickDiv() {
    alert('Hola! Soy el div')
}

const div = document.getElementById("div");

div.addEventListener("click", clickDiv);

function clickButton(event) {
    alert('Hola!')
    event.stopPropagation();

}

const button = document.getElementById("button");

button.addEventListener("click", clickButton) ;