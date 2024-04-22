let h1 = document.querySelector('#name-el');
let inputElementForBgColor = document.querySelector('input');
let inputElementForTextColor = document.querySelector('input:nth-child(2)');
let Form = document.querySelector('form');

// Background Color Change Code
inputElementForBgColor.addEventListener('input', (event) => {
    inputElementForBgColor.setCustomValidity("");
    inputElementForBgColor.checkValidity();

    let color = event.target.value;
    h1.style.backgroundColor = color;
});

// Code for required message of empty input form (backgroundcolor)
inputElementForBgColor.addEventListener('invalid', () => {
    if (inputElementForBgColor.value === "") {
        inputElementForBgColor.setCustomValidity("Enter a background color");
    } else {
        inputElementForBgColor.setCustomValidity("Error");
    }
});

// Background Color Change Code
inputElementForTextColor.addEventListener('input', (event) => {
    inputElementForTextColor.setCustomValidity("");
    inputElementForTextColor.checkValidity();

    let color = event.target.value;
    h1.style.color = color;
});

// Code for required message of empty input form (text color)
inputElementForTextColor.addEventListener("invalid", () => {
    if (inputElementForTextColor.value === "") {
        inputElementForTextColor.setCustomValidity("Enter a text color");
    } else {
        inputElementForTextColor.setCustomValidity("Error");
    }
});

Form.addEventListener('submit', (event) => {
    event.preventDefault();
    // event.preventDefault(); prevents the default get call
});