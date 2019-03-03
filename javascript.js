

let header = document.getElementById('myheader');
let button = document.getElementById('mybutton');

button.addEventListener('click', function() {
    header.innerHTML = "Text from javaScript";
    header.style.backgroundColor="red";
})       