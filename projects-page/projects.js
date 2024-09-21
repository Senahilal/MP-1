
// getting values by using their element id
function getValues()
{

    if(document.getElementById("first").value === "" || document.getElementById("second").value === "" 
    || isNaN(document.getElementById("first").value) || isNaN(document.getElementById("second").value))
    {
        displayResult("Please enter a number");
        return;
    }

    const num1 = Number(document.getElementById("first").value);
    const num2 = Number(document.getElementById("second").value);

    return { first: num1, second: num2 };
}

//addition
function addition() {
    const { first, second } = getValues();
    displayResult(first + second);
}

// subtraction
function subtraction() {
    const { first, second } = getValues();
    displayResult(first - second);
}

// multiplication
function multiplication() {
    const { first, second } = getValues();
    displayResult(first * second);
}

// division
function division() {
    const { first, second } = getValues();
    if (second === 0) {
        displayResult("Zero cannot be the denominator");
    } else {
        displayResult(first / second);
    }
}

// pow
function pow()
{
    const { first, second } = getValues();
    let result = Number(1);
    for (let i = 0; i < second; i++) {
        result *= first;
    }
    displayResult(result);
}

//displayin results in the output element
function displayResult(result) {
    document.getElementById("output").innerHTML = String(result);

    //If the result is negative
    if (Number(result) < 0) {
        document.getElementById("output").style.color = "red"; // Changes text color to red
        document.getElementById("output").style.fontWeight = "bold";
    } else {
        document.getElementById("output").style.color = "black"; // Changes text color to black
    }
}

// clearing input from textboxes
function clearinputs()
{
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
}


