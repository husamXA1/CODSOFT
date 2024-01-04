const expInput = document.querySelector(".screen .current");
const prevInput = document.querySelector(".screen .previous");

function isOperator(s) {
    const operators = ['+', '-', '×', '÷'];
    return operators.some(op => op === s);
}

const btns = [...document.getElementsByTagName("button")].forEach(element => {
        element.onclick = function () {
            if (expInput.innerText === "ERROR!") expInput.innerText = "";
            if (isOperator(element.innerText) && isOperator(expInput.innerText.at(-1))) return;
            expInput.innerText += element.innerText;
        };
});;
document.querySelector(".keypad .clear").onclick = () => {
    expInput.innerText = "";
    prevInput.innerText = "";
};
document.querySelector(".back").onclick = () => expInput.innerText = expInput.innerText.substr(0, expInput.innerText.length - 1);
document.querySelector(".keypad .equals").onclick = function () {
    try {
        result = eval(expInput.innerText.replace("×", "*").replace("÷", "/"));
        prevInput.innerText = expInput.innerText;
        expInput.innerText = `${result}`;
    } catch (error) {
        expInput.innerText = "ERROR!";
    }
}