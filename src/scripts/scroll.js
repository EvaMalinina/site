var hiddenElement = document.getElementById("linkaboutme");
var btn = document.getElementById('Skills');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);