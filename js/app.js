var inputElement = document.getElementById('groupsearch');
var paragraphElement = document.getElementById('group');

inputElement.addEventListener('input', function () {
    var inputValue = inputElement.value;
    
    paragraphElement.style.backgroundColor = "";

    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue[i] == "1") {
            paragraphElement.style.backgroundColor = "green";
            return
        } else if (inputValue[i] == "2") {
            paragraphElement.style.backgroundColor = "red";
            return
        } else if (inputValue[i] == "3") {
            paragraphElement.style.backgroundColor = "blue";
            return
        }
    }

    paragraphElement.textContent = inputValue;
});